import React, { useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, SafeAreaView, TextInput, Platform } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoSlice';
import Todos from '../components/Todos';

const Home = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const createTodo = () => {
    if (title && description) {
      dispatch(addTodo({ title, description }));
      setTitle("");
      setDescription("");
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.text}>TODO APP</Text>
        <TextInput
          style={styles.input}
          onChangeText={(val) => setTitle(val)}
          placeholder="Enter your todo"
          value={title}
        />
        <TextInput
          style={styles.input}
          onChangeText={(val) => setDescription(val)}
          placeholder="Description"
          value={description}
        />
      </SafeAreaView>
      <TouchableOpacity onPress={createTodo} style={styles.button}>
        <Text style={styles.buttonText}>
          ADD TODO
        </Text>
      </TouchableOpacity>
      <View style={styles.Divider} />
      <Todos />
    </View>
  );
};

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
  input: {
    height: 50,
    width: '100%',
    borderColor: '#61dafb',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
    color: '#fff',
    backgroundColor: '#20232a',
  },
  button: {
    backgroundColor: '#61dafb',
    padding: 10,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#282c34',
    fontSize: 18,
    fontWeight: '600',
  },
  Divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#61dafb',
    marginVertical: 20,
  },
});

export default Home;
