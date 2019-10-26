import React from 'react';

import './DeleteModal.css';



const DeleteModal = ({ handleClose, show, children }) => {  
    return (
      <div className={show ? "modal display-block" : "modal display-none"}>
        <section className="modal-main">
          {children}
          <button onClick={handleClose}>close</button>
        </section>
      </div>
    );
  };

export default DeleteModal;