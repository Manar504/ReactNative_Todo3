import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ToDoItem from '../components/Todo'

const CompletedTodos = () => {
  const [doneTodos, setDoneTodos] = useState([]);
  const {todos} = useSelector(state => state.todo);

  useEffect(() => {
    if(todos){
      const filteredTodos = todos.filter(res => res.done);
      setDoneTodos(filteredTodos);
    }
  }, [todos]);
  return (
    <View style={styles.container}>
      {doneTodos.length ? (
        <>
      {doneTodos.map(todo => (
        <ToDoItem key={todo.id} todo={todo} />
      ))}
        </>
      ): <Text style={styles.text}>No Todos Found!</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  text: {
    color: '#61dafb',
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 20,
  },
});

export default CompletedTodos;
