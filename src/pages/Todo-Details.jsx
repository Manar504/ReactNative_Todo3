import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const TodoDetails = () => {
  const prams = useRoute().params;
  return (
    <View style={styles.container}>
    {prams &&
    <View style={styles.detailsContainer}>
    <Text style={styles.title}>{prams.title}</Text>
    <Text style={styles.details} >{prams.description}</Text>
    <Text style={styles.text} >{prams.date}</Text>
    
  </View> }
    </View>
  )
}

export default TodoDetails

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#282c34',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  detailsContainer:{
    width: '100%',
    borderColor: '#61dafb',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#20232a',
  },
  title:{
    color: '#61dafb',
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 20,
  },
  details:{
    color: '#fff',
    fontSize: 18,
    marginBottom: 20,
  },
  text:{
    color: '#fff',
    fontSize: 18,
  },
});
