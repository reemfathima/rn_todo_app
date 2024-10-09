import {StyleSheet} from 'react-native';
import {FONT} from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontFamily: FONT.bold,
    fontSize: 34,
    color: '#2196f3',
    paddingBottom: 10,
  },
  subtitle: {
    fontFamily: FONT.medium,
    fontSize: 18,
    color: '#333333',
    paddingBottom: 30,
  },
  button: {
    padding: 15,
    marginTop: 50,
  },
  signIn: {
    textAlign: 'center',
    fontFamily: FONT.medium,
    fontSize: 15,
    color: '#333333',
    marginTop: 30,
    marginRight: 10,
  },
  signInLink: {
    color: '#2196f3',
  },
});
