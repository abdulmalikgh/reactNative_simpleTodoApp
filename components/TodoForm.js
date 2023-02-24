import { Text, TouchableOpacity, View, StyleSheet, TextInput } from 'react-native'
import React, { Component, useState } from 'react'
const Error = ({msg}) => <Text style={styles.error}>{msg}</Text>

export default function AddTodo({setShowTodos,showTodos,addTodo,todo,isEdit,updateTodo}) {
    const [title, setTitle] = useState(todo?.title || null)
    const [description, setDescription] = useState(todo?.description || null)
    const addNewTodo = () => {
        addTodo((prevTodos => {
            return [...prevTodos, {
                id: Math.floor(Math.random() * 100),
                title,
                description
            }]
        }))
    }
    
    const handleSubmit = () => {
        if(title && description)  {
            setShowTodos(!showTodos)
            if(isEdit) {
                updateTodo({
                    id:todo.id,
                    title,
                    description
                })
            } else {
                addNewTodo()
            }
            setTitle(null)
            setDescription(null)
        }
        
    }
    return (
      <View style={styles.container}>
        <View style={styles.addTodoWrapper}>
            <View style={styles.formInputContainer}>
                <TextInput 
                    style={styles.title}
                    placeholder="Title"
                    value={title}
                    onChangeText={setTitle}
                />
                {!title && <Error msg="Enter todo title" />}
            </View>
            <View style={styles.formInputContainer}>
                <TextInput 
                    style={styles.title}
                    placeholder="Description.."
                    value={description}
                    onChangeText={setDescription}
                />
                {!description && <Error msg="Enter todo description" />}
            </View>
        </View>
       <View style={styles.buttons}>
            <TouchableOpacity onPress={() => setShowTodos(!showTodos)} style={styles.cancel}>
                <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSubmit} style={styles.add}>
                <Text style={styles.buttonText}>{isEdit ? 'Edit': 'Add'} Todo</Text>
            </TouchableOpacity>
       </View>
      </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 40
    },
    buttons: {
        justifyContent: 'space-between',
        flexDirection:'row'
    },
    cancel: {
        backgroundColor: '#A23',
        width: '48%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    add: {
        backgroundColor: '#000A23',
        width: '48%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        fontSize:16,
        color: '#FFF',
    },
    title: {
        borderWidth: 1,
        borderColor: '#000A23',
        padding: 20,
    },
    formInputContainer: {
        marginBottom: 50
    },
    error: {
        color:'#A23',
        paddingTop:4,
        fontSize: 14
    }

})
