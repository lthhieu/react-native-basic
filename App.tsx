import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';

interface ITodo {
  id: number,
  name: string
}
export default function App() {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<ITodo[]>([])
  const addNewTodo = (newTodo: string) => {
    if (newTodo === '') { alert('Please type todo'); return; }
    setTodos(oldTodos => [...oldTodos,
    { id: Math.floor(Math.random() * 100000), name: newTodo }
    ]);
    setTodo('')
  }
  const removeTodo = (item: ITodo) => {
    setTodos(todos.filter(el => { return el.id != item.id }))
  }
  const renderItem = ({ item }: { item: ITodo }) => {
    return (
      <Text onPress={() => {
        removeTodo(item)
      }} style={styles.view}>{item.name}</Text>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello world</Text>
      <View style={styles.body}>
        <TextInput style={styles.input} placeholder='New todo'
          onChangeText={setTodo}
          value={todo} />
        <TouchableOpacity style={styles.addNewTodoButton} onPress={() => { addNewTodo(todo) }}>
          <Text style={styles.textAddNew}>Add todo</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.body2}
        data={todos}
        renderItem={renderItem}
        keyExtractor={item => item.id + ''}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  title: {
    fontSize: 20, fontWeight: '600', color: 'red',
    backgroundColor: 'orange', paddingHorizontal: 20, textAlign: 'center', paddingVertical: 10
  },
  body: {
    marginHorizontal: 50,
  },
  body2: {
    marginHorizontal: 50,
    marginTop: 10
  },
  input: {
    borderBottomWidth: 1,
    borderColor: 'green',
    marginVertical: 20,
    paddingHorizontal: 10
  },
  addNewTodoButton: {
    alignItems: 'center',
    backgroundColor: '#4582e4',
    padding: 10,
    borderRadius: 5,
  },
  textAddNew: { textTransform: 'uppercase', fontWeight: '600', color: '#fff' },
  view: { backgroundColor: 'pink', marginVertical: 10, padding: 20, borderRadius: 5 }
});
