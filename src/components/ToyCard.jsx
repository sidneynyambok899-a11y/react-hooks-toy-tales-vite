import React from "react";

// Displays individual toy details with like and donate buttons
function ToyCard({ toy, onDonate, onLike }) {
  const { id, name, image, likes } = toy;

  return (
    <div className="card" data-testid="toy-card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={() => onLike(toy)}>
        Like {"<3"}
      </button>
      <button className="del-btn" onClick={() => onDonate(id)}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;