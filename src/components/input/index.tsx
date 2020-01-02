import React from 'react';
import { TextInput, KeyboardTypeOptions } from 'react-native';
import styles from './styles';

type Props = {
  value?: string;
  disabled?: boolean;
  onFocus: () => void;
  onBlur: () => void;
  onChangeText?: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
};

const defaultProps = {
  keyboardType: 'default',
  disabled: false,
};

const Input = ({ value, disabled, onFocus, onBlur, onChangeText, keyboardType }: Props) => (
  <TextInput
    value={value}
    style={[styles.input, disabled && (styles.disabled)]}
    underlineColorAndroid='transparent'
    onFocus={onFocus}
    onBlur={onBlur}
    onChangeText={onChangeText}
    keyboardType={keyboardType}
  />
)

Input.defaultProps = defaultProps;

export {
  Input
}