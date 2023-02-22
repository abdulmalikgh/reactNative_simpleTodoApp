import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { TodosContext } from '../App'

export default function TodoLists() {
  const todos = useContext(TodosContext)
  
  return (
    <View style={styles.container}>
      {
        !todos.length && <Text style={{fontSize:'bold', textAlign:'center'}}>No Todo Available</Text>
      }
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 50,
    }
})