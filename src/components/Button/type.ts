import { ReactNode } from 'react';
import { PressableProps } from 'react-native';

export interface ButtonProps extends PressableProps {
  children: ReactNode;
  disabled?: boolean;
}
