import React, { FC, ReactNode } from 'react';
import { View } from 'react-native';
import styles from './styles';

type Props = {
  children?: ReactNode;
}

export const Form: FC<Props> = ({ children }) => <View style={styles.form}>{ children }</View>;