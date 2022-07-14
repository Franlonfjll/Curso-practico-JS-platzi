import React from "react";

function useLocalStorage(itemName, initailValue) {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initailValue);
  
    React.useEffect(() => {
      setTimeout(() => {
        try {
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
        } catch(error) {
          setError(error)
        }
      }, 1000)
    });
  
    const saveItem = (newTodos) => {
      try {
        const stringifiedTodo = JSON.stringify(newTodos);
      localStorage.setItem(itemName, stringifiedTodo);
      setItem(newTodos);
      } catch(error) {
        setError(error);
      }
    };
  
    return {
      item,
      saveItem,
      loading,
      error,
    };
  };

  export { useLocalStorage }