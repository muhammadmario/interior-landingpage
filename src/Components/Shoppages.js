import React from "react";
import Cardshop from "./Cardshop";
import shop1 from "../img/shop1.png";
import shop2 from "../img/shop2.png";
import shop3 from "../img/shop3.png";
import shop4 from "../img/shop4.png";
import shop5 from "../img/shop5.png";
import shop6 from "../img/shop6.png";

function Shoppages() {
  return (
    <div className="shoppages">
      <div className="container">
        <h1>Shop</h1>
        <div className="shop-area">
          <Cardshop image={shop1} nama="Simple shelf" harga="$ 65.98" />
          <Cardshop image={shop2} nama="Sofa mini" harga="$ 99.74" />
          <Cardshop image={shop3} nama="Study lamp" harga="$ 85.36" />
          <Cardshop image={shop4} nama="Mini chair" harga="$ 76.65" />
          <Cardshop image={shop5} nama="Simple table" harga="$ 85.64" />
          <Cardshop image={shop6} nama="Tabletop" harga="$ 78.45" />
        </div>
      </div>
      <div className="button-wrapper">
        <button>All Products</button>
      </div>
    </div>
  );
}

export default Shoppages;
