import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';

export function TodoItem({ todos }) {
    return (
        <View style={styles.todoItem}>
          <View style={styles.textContent}>
            <Text style={styles.todoItemText}>{todos.title}</Text>
            <Text style={styles.todoItemDescription}>{todos.description}</Text>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={{padding:5}}>
              <AntDesign name="edit" size={24} color="green" />
            </TouchableOpacity>
            <TouchableOpacity style={{padding:5}}>
              <MaterialIcons name="delete" size={24} color="#A23" />
            </TouchableOpacity>
          </View>
        </View>
    )
}

export default function TodoLists({todos, setTodos}) {
  
  return (
    <View style={styles.container}>
      {
        !todos.length ?
         <Text style={{fontSize:'bold', textAlign:'center'}}>No Todo Available</Text>:
         <FlatList 
          data={todos}
          keyExtractor={item => item.id}
          renderItem={({item}) => <TodoItem todos={item} />}
        />
      }
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 40,
    },
    todoItem:{
      backgroundColor: "#000A23",
      padding: 15,
      borderRadius: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 10,
      marginBottom: 10
    },
    todoItemText: {
      color:'#FFF',
      fontWeight: 'bold',
      fontSize:14
    },
    todoItemDescription:{
      color:'#EFF',
      fontSize: 12,
      fontStyle:'italic'
    },
    buttonsContainer: {
      flexDirection:'row',
      width:  '18%'
    },
    textContent:{
      width: '80%'
    }
})