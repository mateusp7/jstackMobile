import { Pressable, Text, View } from 'react-native';
import { styles } from './styles';
import { ButtonProps } from './type';

export function Button({ children, disabled = false, ...props }: ButtonProps) {
  return (
    <View style={styles.buttonWrapper}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonActive,
          disabled && styles.buttonDisabled,
        ]}
        android_ripple={{ color: '#444' }}
        disabled={disabled}
        {...props}
      >
        <Text
          style={[styles.buttonLabel, disabled && styles.buttonLabelDisabled]}
        >
          {children}
        </Text>
      </Pressable>
    </View>
  );
}
