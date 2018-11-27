import I18n from 'react-native-i18n'
import en from './en-US'
import ptBR from './pt-BR'

// Em casos de idiomas como 'en-US' ou 'en-GB', ele irá consultar a config 'en'
I18n.fallbacks = true

// Setamos os idiomar suportados. 
I18n.translations = {
  en,
  'pt-BR': ptBR,
}

I18n.locale = 'pt-BR';

// criamos a funcão que irá receber a chave e iremos retornar a tradução
const translate = key => I18n.t(key)

export default translate