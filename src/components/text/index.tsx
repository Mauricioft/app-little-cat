import React from 'react';
import { Text as TextField, StyleProp, TextStyle } from 'react-native';
import styles from './styles';

type Props = {
  title?: string;
  textStyle?: StyleProp<TextStyle>;
}

export const Text = ({ title, textStyle }: Props) => (
  <TextField style={[styles.text, textStyle]}>
    {title}
  </TextField>
);