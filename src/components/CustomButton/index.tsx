import React from 'react';
import {
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {styles} from './styles';

interface CustomButtonProps extends TouchableOpacityProps {
  text?: string;
  onPress?: (event: GestureResponderEvent) => void;
  style?: object;
}

const CustomButton: React.FC<CustomButtonProps> = ({text, onPress, style}) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
