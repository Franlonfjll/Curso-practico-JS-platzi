import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

function Modal({ children }) {
    return ReactDOM.createPortal(
        <div className='ModalFondo'>
            <p className='ModalContenido'>
                {children}
            </p>
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };