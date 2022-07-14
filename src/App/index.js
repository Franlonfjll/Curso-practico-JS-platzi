import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Cortar tomate', completed: false },
//   { text: 'Cortar papa', completed: false },
// ];

function App () {

    return (
      <TodoProvider>
        <AppUI />
      </TodoProvider>
    );
}

export default App;
