import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  buttonWrapper: {
    overflow: 'hidden',
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#222',
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonActive: {
    opacity: Platform.OS === 'ios' ? 0.7 : 1,
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonLabel: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  buttonLabelDisabled: {
    color: '#888',
  },
});
