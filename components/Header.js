import { View,Text,StyleSheet, StatusBar } from "react-native"

export default function Header() {
  return (
    <View style={styles.header}>
        <Text style={styles.headerText}> My Todos </Text>
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
        marginTop: StatusBar.currentHeight || 0
    },
    headerText: {
        fontSize:18,
        fontWeight:'bold',
        color:'#FFF'
    }
})
