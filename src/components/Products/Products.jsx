import ProductItem from "./ProductItem";
import { productData } from "../../productData";
import "./Products.css";
import NewProduct from "../NewProduct/NewProduct";
import { useState } from "react";

const Products = () => {
  const [products, setProducts] = useState(productData);

  return (
    <div className="product-wrapper">
      <NewProduct setProducts={setProducts} products={products} />
      <h1 className="text-center mb-5 text-danger fw-bold text-uppercase">
        Products
      </h1>
      <div className="products">
        {products.map((product) => (
          <ProductItem key={product.productName} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
