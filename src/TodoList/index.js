import React from "react";
import './TodoList.css';

function TodoList(props) {
    return (
        <section className="todo-list-container">
            <ul className="todo-list-ul">
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList };