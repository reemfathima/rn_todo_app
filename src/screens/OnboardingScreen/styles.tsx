import {StyleSheet} from 'react-native';
import {FONT} from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontFamily: FONT.bold,
    fontSize: 34,
    textAlign: 'center',
    color: '#333333',
    paddingBottom: 20,
  },
  highlight: {
    color: '#2196f3',
  },
  subtitle: {
    fontFamily: FONT.medium,
    fontSize: 18,
    textAlign: 'center',
    color: '#333333',
    paddingHorizontal: 25,
  },
  startButton: {
    width: '100%',
    backgroundColor: '#2196f3',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    padding: 15,
    marginTop: 50,
  },
  startText: {
    fontFamily: FONT.bold,
    fontSize: 20,
    color: '#ffffff',
  },
});
