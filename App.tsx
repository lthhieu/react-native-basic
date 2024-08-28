import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, Pressable, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import FlexBox from './components/flex.box';

interface ITodo {
  id: number,
  name: string
}
export default function App() {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<ITodo[]>([])
  const addNewTodo = (newTodo: string) => {
    if (newTodo === '') {
      Alert.alert('Lỗi xảy ra', 'Không được để trống tên công việc', [
        { text: 'Đã hiểu' },
      ])
      return;
    }
    setTodos(oldTodos => [...oldTodos,
    { id: Math.floor(Math.random() * 100000), name: newTodo }
    ]);
    setTodo('')
  }
  const removeTodo = (id: number) => {
    setTodos(todos.filter(el => { return el.id !== id }))
  }
  const renderItem = ({ item }: { item: ITodo }) => {
    return (
      <Pressable style={(({ pressed }) => ({ opacity: pressed ? 0.5 : 1 }))} onPress={() => {
        removeTodo(item.id)
      }}>
        <Text style={styles.view}>{item.name}</Text>
      </Pressable>

    );
  };
  return (
    // <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    //   <View style={styles.container}>
    //     <Text style={styles.title}>Hello world</Text>
    //     <View style={styles.body}>
    //       <TextInput style={styles.input} placeholder='Tên công việc mới'
    //         onChangeText={setTodo}
    //         value={todo} />
    //       <Pressable style={styles.addNewTodoButton} onPress={() => { addNewTodo(todo) }}>
    //         <Text style={styles.textAddNew}>Thêm công việc mới</Text>
    //       </Pressable>
    //     </View>
    //     <FlatList
    //       style={styles.body2}
    //       data={todos}
    //       renderItem={renderItem}
    //       keyExtractor={item => item.id + ''}
    //     />
    //   </View>
    // </TouchableWithoutFeedback>
    <FlexBox />
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
