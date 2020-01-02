import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from '../text/'
import styles from './styles';

type Props = {
  title: string;
  disabled?: boolean;
  onPress: () => void;
}

const defaultProps = {
  disabled: false
}

const Button = ({ title, disabled, onPress }: Props) => (
  <TouchableOpacity style={styles.button} onPress={onPress} disabled={disabled}>
    <Text
      title={title} 
      textStyle={styles.text}
    />
  </TouchableOpacity>
);

Button.defaultProps = defaultProps

export {
  Button
}