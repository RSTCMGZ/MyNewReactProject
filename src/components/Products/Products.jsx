import ProductItem from "./ProductItem";
import { productData } from "../../productData";
import "./Products.css";
import NewProduct from "../NewProduct/NewProduct";

const Products = () => {
  return (
    <div className="product-wrapper">
      <NewProduct />
      <h1 className="text-center">Products</h1>
      <div className="products">
        {productData.map((product) => (
          <ProductItem key={product.productName} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
