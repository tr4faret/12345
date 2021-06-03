import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Navbar} from "./sourse/Navbar";
import {Back} from "./sourse/Back";

export default function App() {
    const [todos, setTodos] = useState([])
    const addTodo = (title) =>{
        setTodos(prev => [
            ...prev, {
                id: Date.now().toString(),
                title:title
            }]
        )
    }
  return (
    <View style={styles.container}>
      <Navbar title="First" />
      <Back onSubmit={addTodo}/>
      <View>
          {todos.map((todo) =>{
              return <Text>{todo.title}</Text>
          })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
