import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export default function AddTodo({cancel,addTodo}) {
 
    return (
      <View style={styles.container}>
       <View style={styles.buttons}>
            <TouchableOpacity onPress={cancel} style={styles.cancel}>
                <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={addTodo} style={styles.add}>
                <Text style={styles.buttonText}>Add Todo</Text>
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
    }
})
