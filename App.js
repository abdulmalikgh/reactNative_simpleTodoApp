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
  const [selectedTodo, setSelectedTodo] = useState(null)
  const [editTodo, setEditTodo] = useState(false)

  const updateTodo = (todo) => {
    const newTodo = [...todos]
    setTodos(newTodo.map( td => (td.id === todo.id ? {...todo, title:todo.title, description: todo.description}: td)))
    setEditTodo(false)
    setSelectedTodo(null)
}
  return (
      <SafeAreaView style={styles.container}>
        <Header  title={showTodos ? 'My Todos' : editTodo ? 'Edit Todo' : 'Add Todo'}/>
        {
          showTodos ? 
          <TodoLists t
            todos={todos}
            setTodos={setTodos}
            setSelectedTodo={setSelectedTodo}
            setShowTodos={setShowTodos}
            setEditTodo={setEditTodo}
            /> :
          <TodoForm 
            setShowTodos={setShowTodos}
            showTodos={showTodos}
            addTodo={setTodos}
            todos={todos}
            isEdit={editTodo}
            todo={selectedTodo} 
            updateTodo={updateTodo}
          />
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
