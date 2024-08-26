import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

interface IStudents {
  id: number, name: string, age: number
}

export default function App() {
  const [students, setStudents] = useState<IStudents[]>([
    { id: 1, name: 'Hieu1', age: 18 },
    { id: 2, name: 'Hieu2', age: 18 },
    { id: 3, name: 'Hieu3', age: 18 },
    { id: 4, name: 'Hieu4', age: 18 },
    { id: 5, name: 'Hieu5', age: 18 },
    { id: 6, name: 'Hieu6', age: 18 },
    { id: 7, name: 'Hieu7', age: 18 },
    { id: 8, name: 'Hieu8', age: 18 },
    { id: 9, name: 'Hieu9', age: 18 },
    { id: 10, name: 'Hieu10', age: 18 },
    { id: 11, name: 'Hieu11', age: 18 },
    { id: 12, name: 'Hieu12', age: 18 },
    { id: 13, name: 'Hieu13', age: 18 },
    { id: 14, name: 'Hieu14', age: 18 },
    { id: 15, name: 'Hieu15', age: 18 },
    { id: 16, name: 'Hieu16', age: 18 },
  ])
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello world</Text>
      <ScrollView>
        {students.map((item) => {
          return (<View style={styles.view} key={item.id}>
            <Text>{item.name}</Text>
          </View>)
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'flex-start',
    // justifyContent: 'flex-start',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  title: { fontSize: 20, fontWeight: '600', color: 'red' },
  view: { backgroundColor: 'pink', marginVertical: 10, padding: 20, borderRadius: 5 }
});
