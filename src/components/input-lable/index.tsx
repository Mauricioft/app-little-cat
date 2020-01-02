import React from 'react';
import { Animated } from 'react-native';
import styles from './styles';

type Props = {
  title: string;
  isFocused: Function;
}

export const InputLabel = ({ title, isFocused }: Props) => (
  <Animated.Text style={[styles.label, isFocused()]}>
    {title}
  </Animated.Text>
)