import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles';

Icon.loadFont();

interface IconTextInputProps extends TextInputProps {
  icon?: string | undefined;
  leftIcon?: string | undefined;
  label?: string | undefined;
  error?: string;
}

const IconTextInput: React.FC<IconTextInputProps> = ({
  icon,
  leftIcon,
  label,
  error,
  secureTextEntry,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(secureTextEntry);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        {icon && <Icon name={icon} size={20} style={styles.icon} />}
        {label && <Text style={styles.label}>{label}</Text>}
      </View>
      <View style={styles.inputContainer}>
        {leftIcon && <Icon name={leftIcon} size={25} style={styles.leftIcon} />}
        <TextInput
          style={[styles.input, error ? styles.errorInput : null]}
          secureTextEntry={isVisible}
          {...props}
        />
        {secureTextEntry && (
          <TouchableOpacity onPress={toggleVisibility} style={styles.eyeIcon}>
            <Icon name={isVisible ? 'eye-off' : 'eye'} size={20} />
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default IconTextInput;
