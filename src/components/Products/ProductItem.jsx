import { useState } from "react";
import "./ProductItem.css";

const ProductItem = ({ product }) => {
  const { imageUrl, productName, productPrice } = product;
  // let title = productName;
  const [title, setTitle] = useState(productName);

  const clickHandler = () => {
    setTitle("Güncellendi!");
  };
  const clickBack = () => {
    setTitle(productName);
  };

  return (
    <div className="product-item  bg-dark p-2">
      <div className="product-image">
        <img src={imageUrl} alt="" />
      </div>
      <h4 className="text-white text-center mt-2">{title}</h4>
      <span className="fw-bold text-white d-block text-center">
        {productPrice}₺
      </span>
      <div className="d-flex  flex-column">
        <button className="btn btn-danger mt-2" onClick={clickHandler}>
          Güncelle
        </button>
        <button className="btn btn-danger  mt-2" onClick={clickBack}>
          Geri Al
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
