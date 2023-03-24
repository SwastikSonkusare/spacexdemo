import React from "react";

import CardDetails from "../CardDetails";

import "./Modal.css";

const Modal = ({ item, showModal, setShowModal }) => {
  return (
    <div className="overlay">
      <div className="modal">
        <CardDetails
          item={item}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </div>
    </div>
  );
};

export default Modal;
