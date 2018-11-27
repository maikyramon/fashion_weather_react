// imports
import translate from '../locale';
import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert, StyleSheet} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { weatherConditions } from '../utils/WeatherConditions';

class Weather extends Component {
  state = {
    //estado que controla o modal
    modalVisible: false,
  }

  setModalVisible = (visible) => {
    //abre ou fecha a tela sobre 
    this.setState({modalVisible: visible});
  } 

  render (){
    return (
      <View
        // view principal, pega a cor de acordo com o tipo de clima
        style={[
          styles.weatherContainer,
          { backgroundColor: weatherConditions[this.props.weather].color }
        ]}
      >
        {/*header que mostra o icone do clima e a temperatura*/}
        <View style={styles.headerContainer}>
          <MaterialCommunityIcons
            size={72}
            name={weatherConditions[this.props.weather].icon}
            color={'#fff'}
          />
          <Text style={styles.tempText}>{this.props.temperature}˚</Text>
        </View>
        {/*container que mostra o tipo do clima (chuva, ensolarado) e a descrição */}
        <View style={styles.bodyContainer}>
          <Text style={styles.title}>{weatherConditions[this.props.weather].title}</Text>
          <Text style={styles.subtitle}>
            {weatherConditions[this.props.weather].subtitle}
          </Text>
        </View>

        {/*tela sobre*/ }
        <View style={[
            styles.sobre,
            { marginTop: 10 }
          ]}>
          
          <Modal  //tipo de animação da tela
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}>
            <View style={styles.modal}>
              <View>
                <Text>  </Text>
                <Text>  </Text>
                <Text> Fashion Weather APP</Text>
                <Text>  </Text>
                <Text> Alunos: Maiky Ramon e Elton Albugieri</Text>
                <Text>  </Text>
                <Text> Desenvolvido utilizando React Native!</Text>
                <Text>  </Text>
                <Text>  </Text>
                <Text>  </Text>
                <Text>  </Text>
                <Text>  </Text>

                <TouchableHighlight
                  onPress={() => { // ao clicar fecha o sobre
                    this.setModalVisible(!this.state.modalVisible);
                  }}>
                  <Text>Fechar</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>

        <TouchableHighlight
            // ao clicar, abre o sobre
            onPress={() => {this.setModalVisible(true);}}>  
            <Text color='white'>{translate('sobre')}</Text>
        </TouchableHighlight>
        </View> 
    </View>      
    );
  }
};
//definição dos parametros 
Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  weather: PropTypes.string
};
//definição dos estilos dos containers
const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1
  },
  sobre: {
    padding: 20,
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  tempText: {
    fontSize: 72,
    color: '#fff'
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40
  },
  title: {
    fontSize: 60,
    color: '#fff'
  },
  subtitle: {
    fontSize: 24,
    color: '#fff'
  }
});

export default Weather;
