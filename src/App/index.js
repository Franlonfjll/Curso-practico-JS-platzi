import React from 'react';
import { AppUI } from './AppUI';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Cortar tomate', completed: false },
//   { text: 'Cortar papa', completed: false },
// ];

function useLocalStorage(itemName, initailValue) {
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initailValue);

  React.useEffect(() => {
    setTimeout(() => {
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;
      
      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initailValue));
        parsedItem = initailValue;
      } else {
        parsedItem = JSON.parse(localStorageItem);
      }

      setItem(parsedItem);
      setLoading(false);
    }, 1000)
  });

  const saveItem = (newTodos) => {
    const stringifiedTodo = JSON.stringify(newTodos);
    localStorage.setItem(itemName, stringifiedTodo);
    setItem(newTodos);
  };

  return {
    item,
    saveItem,
    loading,
  };
};

function App () {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
  } = useLocalStorage('TODOS_1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };



    return (
      <AppUI
        loading={loading}
        totalTodos={totalTodos}
        completedTodos={completedTodos}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchedTodos={searchedTodos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
    );
}

export default App;
