import React, { FC, ReactNode } from 'react'
import { View } from 'react-native';
import styles from './styles'

type Props = {
  children?: ReactNode;
}

export const InputLayout: FC<Props> = ({ children }) => <View style={styles.container}>{children}</View>;