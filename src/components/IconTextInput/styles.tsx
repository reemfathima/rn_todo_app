import {StyleSheet} from 'react-native';
import {FONT} from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  labelContainer: {
    flexDirection: 'row',
    margin: 5,
  },
  icon: {
    marginRight: 5,
    color: '#333333',
  },
  label: {
    fontFamily: FONT.regular,
    fontSize: 15,
    color: '#333333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#33333366',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  leftIcon: {
    marginRight: 5,
    color: '#2196f3',
  },
  input: {
    flex: 1,
    fontFamily: FONT.medium,
    height: 50,
    fontSize: 16,
  },
  eyeIcon: {
    color: '#333333',
    padding: 5,
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
    fontFamily: FONT.medium,
    fontSize: 12,
  },
});
