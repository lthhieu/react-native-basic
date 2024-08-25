import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.hello1}>Hello world 1!</Text>
      <Text>Hello world 2!</Text>
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
  hello1: {
    color: 'red', fontSize: 30,
    borderColor: 'green',
    borderWidth: 1,
    padding: 10,
    fontWeight: '600'
  }
});
