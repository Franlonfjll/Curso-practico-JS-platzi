import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton(props) {
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState)
    }

    return (
        <div className="flex-container">
            <div className="flex-items">
                <button 
                className="button-create scale-up-center-bt"
                onClick={onClickButton} >+</button>
            </div>            
        </div>
    );
}

export { CreateTodoButton };