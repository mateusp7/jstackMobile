import { Platform, StatusBar, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
  },
  container: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
    gap: 16,
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 8,
    height: 72,
    paddingHorizontal: 16,
    color: '#333',
  },
  textAreaFocused: {
    borderColor: '#222',
  },
});
