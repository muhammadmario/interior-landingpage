import React from "react";
import furnitursatu from "../img/furnitursatu.png";

function Infodua() {
  return (
    <div className="infodua">
      <div className="container">
        <div className="sectionsatu">
          <h1>So that your home can be more comfortable</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            repudiandae quod odit beatae harum laborum tempore natus molestiae
            assumenda tenetur aliquid amet eos et error sit consequuntur nobis
            dolores unde in minima, placeat corporis? Ipsam minima iste at sed
            consequatur, voluptates, explicabo facere perspiciatis tempore hic
            nobis voluptatum atque praesentium dolorum mollitia ad, temporibus
            rerum eligendi doloribus nam provident quas nostrum necessitatibus.
            Et velit doloremque quis! Laudantium at, necessitatibus consequatur
            totam rerum, nostrum pariatur in culpa ab magnam, saepe ea eius
            exercitationem quas adipisci iure quod quis dolorem. Odit repellat
            alias aliquam quaerat maxime nisi ipsa nam dolore illum commodi.
          </p>
        </div>
        <div className="sectiondua">
          <img src={furnitursatu} alt="gambar" />
        </div>
      </div>
    </div>
  );
}

export default Infodua;
