import * as Font from 'expo-font';

export const fetchFonts = () => {
  return Font.loadAsync({
    'roboto-bold': require('../../assets/fonts/Roboto-Bold.ttf'),
    'roboto-italic': require('../../assets/fonts/Roboto-Italic.ttf'),
    'roboto-regular': require('../../assets/fonts/Roboto-Regular.ttf')
  });
}