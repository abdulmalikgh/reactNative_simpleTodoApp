import { StatusBar } from 'expo-status-bar';
import { createContext, useContext,useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import TodoForm from './components/TodoForm';
import Header from './components/Header';
import OpenAddToDoButton from './components/OpenAddToDoButton';
import TodoLists from './components/TodoLists';

export const TodosContext = createContext([])

export default function App() {
  const [showTodos, setShowTodos] = useState(true)
  const [todos, setTodos] = useState([])

  return (
    <TodosContext.Provider value={todos}>
      <SafeAreaView style={styles.container}>
        <Header  title={showTodos ? 'My Todos' : 'Add Todo'}/>
        {
          showTodos ? <TodoLists /> : <TodoForm 
            setShowTodos={setShowTodos}
            showTodos={showTodos}
            addTodo={setTodos} />
        }
        {
          showTodos && <OpenAddToDoButton openForm={ () => setShowTodos(false)}/>
        }
      </SafeAreaView>
    </TodosContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
