import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import TodoForm  from './TodoForm'

export function TodoItem({ todo,deleteTodo,editTodo }) {
    const handleDeleteTodo = () => {
      return Alert.alert(
        'Confirm Delete',
        'Do you really want to delete this todo?',
        [
          {
            text: 'No',
            style: 'cancel',
          },
          {
            text:'Yes',
            onPress: () => deleteTodo(todo),
            style:'ok'
          }
        ]
      )
    }

    return (
        <View style={styles.todoItem}>
          <View style={styles.textContent}>
            <Text style={styles.todoItemText}>{todo.title}</Text>
            <Text style={styles.todoItemDescription}>{todo.description}</Text>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity onPress={() => editTodo(todo)} style={{padding:5}}>
              <AntDesign name="edit" size={24} color="green" />
            </TouchableOpacity>
            <TouchableOpacity style={{padding:5}}>
              <MaterialIcons onPress={handleDeleteTodo} name="delete" size={24} color="#A23" />
            </TouchableOpacity>
          </View>
        </View>
    )
}

export default function TodoLists({todos, setTodos,setShowTodos,setEditTodo,setSelectedTodo}) {
  const deleteTodo = (todo) => {
    setTodos(todos.filter((td) => td.id !== todo.id))
  }
  const editTodo = (todo) => {
    setSelectedTodo(todo)
    setShowTodos(false)
    setEditTodo(true)
  }
  return (
    <View style={styles.container}>
      {
        !todos.length ?
         <Text style={{fontSize:'bold', textAlign:'center'}}>No Todo Available</Text>:
         <FlatList 
          data={todos}
          keyExtractor={item => item.id}
          renderItem={({item}) => <TodoItem 
            todo={item} 
            deleteTodo={deleteTodo}
            editTodo={editTodo} />}
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