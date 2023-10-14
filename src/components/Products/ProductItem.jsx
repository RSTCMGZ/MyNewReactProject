import { useState } from "react";
import "./ProductItem.css";
import Counter from "../Counter";

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
    <div className="product-item  rounded-1  bg-dark p-1">
      <div className="product-image ">
        <img src={imageUrl} alt="" />
      </div>
      <h4 className="text-white text-center mt-2">{title}</h4>

      <Counter productPrice={productPrice} />
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
