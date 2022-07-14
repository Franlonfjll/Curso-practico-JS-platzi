import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton(props) {
    const onClickButton = (msg) => {
        alert(msg);
    }

    return (
        <div className="flex-container">
            <div className="flex-items">
                <button 
                className="button-create scale-up-center-bt"
                onClick={() => onClickButton('Aquí se debería abrir un modal')} >+</button>
            </div>            
        </div>
    );
}

export { CreateTodoButton };