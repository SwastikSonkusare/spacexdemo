import React, { useState } from "react";

import CardDetails from "../CardDetails";
import Modal from "../Modal/Modal";

import "./Card.css";

const Card = ({ items }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (item) => {
    setSelectedCard(item);
    setShowModal(true);
  };

  return (
    <>
      <h1>Capsules</h1>
      <div className="container">
        {items?.map((item, index) => (
          <div
            key={index}
            className="card"
            onClick={() => handleCardClick(item)}
          >
            <CardDetails item={item} />
          </div>
        ))}
        {showModal && (
          <Modal
            item={selectedCard}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        )}
      </div>
    </>
  );
};

export default Card;
