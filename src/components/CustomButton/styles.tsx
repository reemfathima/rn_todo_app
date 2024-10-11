import {StyleSheet} from 'react-native';
import {FONT} from '../../constants/fonts';

export const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: '#2196f3',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  text: {
    fontFamily: FONT.bold,
    fontSize: 20,
    color: '#ffffff',
  },
});
