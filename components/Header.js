import { View,Text,StyleSheet, StatusBar } from "react-native"

export default function Header({title}) {
  return (
    <View style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        backgroundColor:'#000A23',
        marginTop: StatusBar.currentHeight || 0,
       
    },
    headerText: {
        fontSize:18,
        fontWeight:'bold',
        color:'#FFF'
    }
})
