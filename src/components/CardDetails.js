import React from "react";

const CardDetails = ({ item, showModal, setShowModal }) => {
  const handleModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="card__header">
        <h4>{item.capsule_id}</h4>
        <span>{item.capsule_serial}</span>
      </div>
      <div className="card__info">
        <h5>Resused {item.reuse_count} times</h5>
        <h5>{item.landings} landings</h5>
        <span>Status: {item.status}</span>
        <h5>{item.details}</h5>
        {showModal && (
          <button className="modal-btn" onClick={handleModal}>
            Close
          </button>
        )}
      </div>
    </>
  );
};

export default CardDetails;
