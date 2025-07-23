import { useState } from 'react';
import { TextInput } from 'react-native';
import { styles } from './styles';
import { IInputProps } from './type';

export const Input = ({ ref, ...props }: IInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      style={[styles.input, isFocused && styles.inputFocused]}
      placeholderTextColor="#aaa"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      ref={ref}
      {...props}
    />
  );
};
