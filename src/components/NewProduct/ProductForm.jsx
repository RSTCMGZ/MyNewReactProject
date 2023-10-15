import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ProductForm() {
  return (
    <Form className="m-3 d-flex flex-column align-items-center justify-content-center">
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>Ürün Adı </Form.Label>
        <Form.Control type="email" placeholder="Ürün Adı Giriniz... " />
      </Form.Group>

      <Form.Group className="mb-3 " controlId="formBasicPassword">
        <Form.Label>Ürün Fiyatı</Form.Label>
        <Form.Control type="password" placeholder="Ürün Fiyatı Giriniz..." />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Ürün Görseli</Form.Label>
        <Form.Control type="password" placeholder="Ürün Görseli Giriniz..." />
        <Button variant="danger" type="submit" className=" w-100 mt-3">
          Ürün Ekle
        </Button>
      </Form.Group>
    </Form>
  );
}

export default ProductForm;
