import { RefObject } from 'react';
import { TextInput, TextInputProps } from 'react-native';

export interface IInputProps extends TextInputProps {
  ref?: RefObject<TextInput | null>;
}
