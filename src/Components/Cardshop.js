import React from "react";

function Cardshop({ harga, image, nama }) {
  return (
    <div className="cardshop">
      <img src={image} alt="gambar" />
      <p>{nama}</p>
      <span>{harga}</span>
    </div>
  );
}

export default Cardshop;
