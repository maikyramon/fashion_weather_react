import translate from './locale';
import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

import { DangerZone } from 'expo';
const { Lottie } = DangerZone;

import { API_KEY } from './utils/WeatherAPIKey';

import { db } from './firebase-instance';
import Weather from './components/Weather';

export default class App extends React.Component {
  state = {
    // estado inicial da aplicação
    isLoading: true,
    temperature: 0,
    weatherCondition: null,
    error: null
  };

  componentDidMount() {
    // após renderizar o app, busca as informações do clima

    db.collection('info').doc('8GR7BjyOdzTnZqs27CPo').set({
      last_consult_date: new Date()
    });

    navigator.geolocation.getCurrentPosition(
      position => {
        this.fetchWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: 'Error Getting Weather Condtions'
        });
      }
    );
  }

  fetchWeather(lat, lon) {
    // busca as informações do clima no openweathermap, passando os parametros
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
    )
      .then(res => res.json())
      .then(json => {
        // console.log(json);
        this.setState({
          temperature: json.main.temp,
          weatherCondition: json.weather[0].main,
          isLoading: false
        });
      });
  }

  render() {
    const { isLoading, weatherCondition, temperature } = this.state;
    return (
      <View style={styles.container}>
        {isLoading ? ( // se está carregando mostra o container "loadingContainer" se não mostra o container com as informações
          <View style={styles.loadingContainer}>
            <Text style={styles.loadingText}> {translate('fetching_weather')} </Text>
          </View>
        ) : (
          // container das informações do clima
          <Weather weather={weatherCondition} temperature={temperature} />
        )}
      </View>
    );
  }
}
// definição dos estilos dos containers
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFDE4'
  },
  loadingText: {
    fontSize: 30
  }
});
