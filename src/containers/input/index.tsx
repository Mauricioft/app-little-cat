import React, { useState } from 'react';
import { Animated } from 'react-native';
import { InputLayout } from '../../components/input-layout/'
import { InputLabel } from '../../components/input-lable/'
import { Input as TextInput } from '../../components/input/'

type Props = {
  title?: string;
  name?: string;
  value?: string;
  disabled?: boolean;
  onChangeText?: (name: string, text: string) => void;
}

export const Input = ({ title, name, disabled, value, onChangeText }: Props) => {
  const [ isActive, setIsActive ] = useState(false);
  const position = new Animated.Value(value ? 1 : 0);
 
  const _isFocused = () => ({
    top: position.interpolate({
      inputRange: [0, 1],
      outputRange: [14, 0],
    }),
    fontSize: isActive ? 10.5 : 15,
    color: isActive ? 'rgba(0, 0, 0, 0.6)' : 'dimgrey',
  })

  const _onChangeText = (value: string) => onChangeText(name, value);
 
  const _handleFocus = (): void => {
    if (!isActive) {
      setIsActive(true);
      _handlerAnimated(1);
    }
  }

  const _handleBlur = (): void => {
    if (isActive && !value) {
      setIsActive(false);
      _handlerAnimated(0);
    }
  }

  const _handlerAnimated = (toValue: number, duration: number = 150) => {
    return Animated.timing(position, {
      toValue,
      duration,
    }).start();
  }

  return(
    <InputLayout>
      <InputLabel title={title} isFocused={_isFocused} />
      <TextInput
        value={value}
        disabled={disabled}
        onChangeText={_onChangeText}
        onFocus={_handleFocus}
        onBlur={_handleBlur}
      />
    </InputLayout>
  );
}