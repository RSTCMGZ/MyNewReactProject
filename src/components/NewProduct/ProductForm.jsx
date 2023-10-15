import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ProductForm = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const titleChangeHandler = (event) => {
    setProductName(event.target.value);
  };
  const priceChangeHandler = (event) => {
    setProductPrice(event.target.value);
  };
  const imageChangeHandler = (event) => {
    setImageUrl(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newProductData = {
      productName,
      productPrice,
      imageUrl,
    };

    setProductName("");
    setProductPrice("");
    setImageUrl("");
  };

  return (
    <Form
      className="m-3 d-flex flex-column align-items-center justify-content-center"
      onSubmit={submitHandler}
    >
      <Form.Group className="mb-3 ">
        <Form.Label>Ürün Adı: </Form.Label>
        <Form.Control
          type="text"
          placeholder="Ürün Adı Giriniz... "
          onChange={titleChangeHandler}
          value={productName}
        />
      </Form.Group>

      <Form.Group className="mb-3 " controlId="formBasicPassword">
        <Form.Label>Ürün Fiyatı:</Form.Label>
        <Form.Control
          type="password"
          placeholder="Ürün Fiyatı Giriniz..."
          onChange={priceChangeHandler}
          value={productPrice}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Ürün Görseli:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ürün Görseli Giriniz..."
          onChange={imageChangeHandler}
          value={imageUrl}
        />

        <Button variant="danger" type="submit" className=" w-100 mt-3">
          Ürün Ekle
        </Button>
      </Form.Group>
    </Form>
  );
};

export default ProductForm;
