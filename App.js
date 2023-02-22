import { StatusBar } from 'expo-status-bar';
import { createContext, useContext,useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import TodoForm from './components/TodoForm';
import Header from './components/Header';
import OpenAddToDoButton from './components/OpenAddToDoButton';

const todosContext = createContext()

export default function App() {
  const [showTodos, setShowTodos] = useState(true)

  const addTodo = (title, description) => {
    console.log(title,description)
  }

  return (
    <SafeAreaView style={styles.container}>
        <Header  title={showTodos ? 'My Todos' : 'Add Todo'}/>
        {
          showTodos ? null : <TodoForm 
            setShowTodos={setShowTodos}
            showTodos={showTodos}
            addTodo={() => addTodo} />
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
