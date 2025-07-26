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
  View,
  Text,
  ScrollView,
} from 'react-native';
import { styles } from './styles';

console.log(Platform.OS, Platform.Version);

const posts = Array.from({ length: 5 }).map((_, index) => {
  return {
    id: Math.random(),
    title: `Posts #${index + 1}`,
  };
});

function App() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView
        contentContainerStyle={{
          alignItems: 'stretch',
          gap: 16,
        }}
        style={styles.container}
      >
        <StatusBar barStyle="dark-content" />
        {posts.map(post => (
          <View key={post.id} style={styles.postContainer}>
            <Text style={styles.postTitle}>{post.title}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
