import ProductForm from "./ProductForm";

import React from "react";

const NewProduct = (props) => {
  return (
    <div>
      <ProductForm setProducts={props.setProducts} products={props.products} />
    </div>
  );
};

export default NewProduct;
