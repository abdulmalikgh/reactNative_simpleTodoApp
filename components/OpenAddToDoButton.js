import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

export default function OpenAddToDoButton() {
  return (
    <TouchableOpacity style={styles.button}>
      <Ionicons name="add-outline" size={24} color="white" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        position:'absolute',
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#000A23',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        bottom: 15,
        right: 15
    }
})