import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "./basic.css";
function BasicExample() {
  return (
    <div className="w-100 text-center ">
      <FloatingLabel
        controlId="floatingInput"
        label="Ürün Adı Giriniz..."
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Ürün Fiyatı ₺">
        <Form.Control type="password" placeholder="Ürün Fiyatı Giriniz..." />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingPassword"
        label="Ürün Görseli Giriniz..."
        className="mt-3"
      >
        <Form.Control type="text" placeholder="Ürün Fiyatı Giriniz..." />
      </FloatingLabel>
    </div>
  );
}

export default BasicExample;
