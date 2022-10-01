import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, SafeArea, FlatList } from 'react-native';

import ALl from './screens/All'


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Rusni Pizda!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
