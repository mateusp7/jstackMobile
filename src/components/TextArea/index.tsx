import { useState } from 'react';
import { TextInput } from 'react-native';
import { styles } from './styles';
import { ITextAreaProps } from './type';

export const TextArea = ({ ref, ...props }: ITextAreaProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      style={[styles.textArea, isFocused && styles.textAreaFocused]}
      placeholderTextColor="#aaa"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      placeholder="Descrição..."
      textAlignVertical="top"
      ref={ref}
      {...props}
      multiline
    />
  );
};
