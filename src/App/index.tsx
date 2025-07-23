/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  View,
  Platform,
  StatusBar,
  SafeAreaView,
  TextInput,
} from 'react-native';
import { styles } from './styles';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { useRef, useState } from 'react';

console.log(Platform.OS, Platform.Version);

function App() {
  const passwordInputRef = useRef<TextInput | null>(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />

        <TextInput
          placeholder="Descrição..."
          style={styles.textArea}
          multiline
          textAlignVertical="top"
        />

        <Input
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="email"
          returnKeyType="next"
          onSubmitEditing={() => passwordInputRef.current?.focus()}
          value={email}
          onChangeText={setEmail}
        />
        <Input
          ref={passwordInputRef}
          placeholder="Senha"
          secureTextEntry
          keyboardType="number-pad"
          returnKeyType="done"
          value={password}
          onChangeText={setPassword}
          onSubmitEditing={() => console.log({ email, password })}
        />

        <Button onPress={() => console.log('Clicou')}>Entrar</Button>
      </View>
    </SafeAreaView>
  );
}

export default App;
