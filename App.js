import { StatusBar } from 'expo-status-bar';
import { createContext, useContext,useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import OpenAddToDoButton from './components/OpenAddToDoButton';

const todosContext = createContext()

export default function App() {
  const [showTodos, setShowTodos] = useState(true)
  return (
    <SafeAreaView style={styles.container}>
        <Header  title={showTodos ? 'My Todos' : 'Add Todo'}/>
        {
          showTodos ? null : <AddTodo cancel={() => setShowTodos(true)} />
        }
        {
          showTodos && <OpenAddToDoButton addTodo={ () => setShowTodos(false)}/>
        }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
