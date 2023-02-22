import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import OpenAddToDoButton from './components/OpenAddToDoButton';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <Header />
        <OpenAddToDoButton/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
