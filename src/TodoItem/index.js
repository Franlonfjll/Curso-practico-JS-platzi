import React from "react";
import './TodoItem.css';

function TodoItem(props){
    return(
        <p className="todo-item-container scale-up-center">
            <span 
            className={`check-item1 ${props.completed && 'check-item1-active'}`}
            onClick={props.onComplete}>
                ✓
            </span>
            <p className={`todo-item ${props.completed && 'todo-item-p-completed'}`}>{props.text}</p>
            <span 
            className="check-item2"
            onClick={props.onDelete}
            >
                X
            </span>
        </p>
    );
}

export { TodoItem };