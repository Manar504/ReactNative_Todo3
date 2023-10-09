import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { useDispatch } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';

import { deleteTodo, changeTodoStatus } from '../store/todoSlice';

const ToDoItem = ({ todo }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch(); 

  const handleDelete = () => {
    dispatch(deleteTodo({ id: todo.id }));
  };

  const handleChangeStatus = () => {
    dispatch(changeTodoStatus({ id: todo.id }));
  };

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Todo-Details', todo);
      }}
      style={styles.container}
    >
      <Text style={styles.text}>{todo.title}</Text>
      <TouchableOpacity
        onPress={handleDelete}
        style={styles.deleteButton}
      >
        <AntDesign name="delete" size={25} color="#282c34" />
      </TouchableOpacity>  

      <TouchableOpacity onPress={handleChangeStatus}>
        {todo.done ? (
          <AntDesign name="checkcircleo" size={24} color="#282c34" />
        ) : (
          <AntDesign name="checkcircle" size={24} color="green" />
        )}
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '400px',
    minHeight: 50,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: '#20232a',
    marginBottom: 20,
    borderRadius: 10,
  },
  text: {
    color: '#61dafb',
    fontSize: 18,
    fontWeight: '600',
  },
  deleteButton: {
    backgroundColor: '#61dafb',
    padding: 10,
    borderRadius: 10,
  },
});

export default ToDoItem;
