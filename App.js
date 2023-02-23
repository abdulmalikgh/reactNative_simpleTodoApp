import { StatusBar } from 'expo-status-bar';
import { createContext, useContext,useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import TodoForm from './components/TodoForm';
import Header from './components/Header';
import OpenAddToDoButton from './components/OpenAddToDoButton';
import TodoLists from './components/TodoLists';


export default function App() {
  const [showTodos, setShowTodos] = useState(true)
  const [todos, setTodos] = useState([])

  return (
      <SafeAreaView style={styles.container}>
        <Header  title={showTodos ? 'My Todos' : 'Add Todo'}/>
        {
          showTodos ? 
          <TodoLists t
            todos={todos}
            setTodos={setTodos} /> :
          <TodoForm 
            setShowTodos={setShowTodos}
            showTodos={showTodos}
            addTodo={setTodos}
            todos={todos} />
        }
        {
          showTodos && <OpenAddToDoButton openForm={ () => setShowTodos(false)}/>
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
