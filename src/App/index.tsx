/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  Platform,
  StatusBar,
  SafeAreaView,
  TextInput,
  Switch,
  KeyboardAvoidingView,
} from 'react-native';
import { styles } from './styles';
import { Button } from '../components/Button';

import { useRef, useState } from 'react';
import { Input } from '../components/Input';
import { TextArea } from '../components/TextArea';

console.log(Platform.OS, Platform.Version);

function App() {
  const passwordInputRef = useRef<TextInput | null>(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [textArea, setTextArea] = useState('');
  const [selected, setSelected] = useState(false);

  return (
    <SafeAreaView style={styles.wrapper}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <StatusBar barStyle="dark-content" />

        <Switch
          style={{ alignSelf: 'flex-start' }}
          value={selected}
          onValueChange={setSelected}
          thumbColor="purple"
          trackColor={{
            false: 'yellow',
            true: '#0fa0fa',
          }}
        />
        <TextArea value={textArea} onChangeText={setTextArea} />
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
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default App;
