import { RefObject } from 'react';
import { TextInput, TextInputProps } from 'react-native';

export interface ITextAreaProps extends TextInputProps {
  ref?: RefObject<TextInput | null>;
}
