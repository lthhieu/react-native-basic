import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState<string>('Hiếu')
  const [number, setNumber] = useState<number>(0)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello {name}!</Text>
      <Text>My number is {number}</Text>
      <View style={styles.buttonGroup}>
        <Button
          onPress={() => {
            setNumber((old) => old + 1)
          }}
          title='Plus 1'
        />
        <Button
          onPress={() => {
            setNumber((old) => old - 1)
          }}
          title='Minus 1'
        />
        <Button
          onPress={() => {
            setNumber(0)
          }}
          title='Reset'
          color={'violet'}
        />
      </View>
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
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: 'red'
  },
  buttonGroup: {
    marginTop: 10,
    flexDirection: 'row',
    gap: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonRed: {
    color: 'red'
  }
});
