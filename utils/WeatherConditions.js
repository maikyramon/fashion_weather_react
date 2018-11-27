import translate from '../locale'

// definição das descrições e titulos de cada condição climática, já com internacionalização

export const weatherConditions = {
  Rain: {
    color: '#005BEA',
    title: translate('chuva'),
    subtitle: translate('chuva_subtitle'),
    icon: 'weather-rainy'
  },
  Clear: {
    color: '#f7b733',
    title: translate('ensolarado'),
    subtitle: translate('ensolarado_subtitle'),
    icon: 'weather-sunny'
  },
  Thunderstorm: {
    color: '#616161',
    title: translate('tempestade'),
    subtitle: translate('tempestade_subtitle'),
    icon: 'weather-lightning'
  },
  Clouds: {
    color: '#808080',
    title: translate('nublado'),
    subtitle: translate('nublado_subtitle'),
    icon: 'weather-cloudy'
  },

  Snow: {
    color: '#00d2ff',
    title: translate('neve'),
    subtitle: translate('neve_subtitle'),
    icon: 'weather-snowy'
  },
  Drizzle: {
    color: '#076585',
    title: translate('garoando'),
    subtitle: translate('garoando_subtitle'),
    icon: 'weather-hail'
  },
  Haze: {
    color: '#66A6FF',
    title: translate('garoando_forte'),
    subtitle: translate('garoando_forte_subtitle'),
    icon: 'weather-hail'
  },
  Mist: {
    color: '#3CD3AD',
    title: translate('nevoa'),
    subtitle: translate('nevoa_subtitle'),
    icon: 'weather-fog'
  }
};
