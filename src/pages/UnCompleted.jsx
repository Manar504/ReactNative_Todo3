import React, { useEffect, useState } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import ToDoItem from '../components/Todo';

const UncompletedTodos = () => {
  const [uncompletedTodos, setUncompletedTodos] = useState([]);
  const { todos } = useSelector(state => state.todo);

  useEffect(() => {
    if (todos) {
      const filteredTodos = todos.filter(todo => !todo.done);
      setUncompletedTodos(filteredTodos);
    }
  }, [todos]);

  return (
    <View style={styles.container}>
      {uncompletedTodos.length ? (
        <>
          {uncompletedTodos.map(todo => (
            <ToDoItem key={todo.id} todo={todo} />
          ))}
        </>
      ) : (
        <Text style={styles.text}> No Uncompleted Todos Found!</Text>
      )}
    </View>
  );
}; 

let styles = StyleSheet.create({
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


export default UncompletedTodos;