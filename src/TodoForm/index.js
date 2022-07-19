import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState('');
  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);
  
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
    setNewTodoValue('')
  };

  return (
    <div className='container-form'>
      <form onSubmit={onSubmit}>
        <div className='title-form'>
          <label>Escribe tu nuevo TODO</label>
        </div>
        <div>
          <textarea
            className='textarea-form'
            value={newTodoValue}
            onChange={onChange}
            placeholder="Escribe tu nueva tarea..."
          />
        </div>
        <div className="container-button-form">
          <button
            type="button"
            className="button-cancel"
            onClick={onCancel}
            >
            Cancel
          </button>
          <button
            type="submit"
            className="button-add"
          >
            Añadir
          </button>
        </div>
      </form>
    </div>
  );
}

export { TodoForm };