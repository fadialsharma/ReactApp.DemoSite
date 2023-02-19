import { Container, Row, Col, Form } from "react-bootstrap";
import products from "./products.json";
import ProductsFilter from "./components/ProductsFilter";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <ProductsFilter />
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
