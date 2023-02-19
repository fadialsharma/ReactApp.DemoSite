import { Container, Row, Col, Form } from "react-bootstrap";
import products from "./products.json";
import ProductsFilter from "./components/ProductsFilter";
import ProductsSearch from "./components/ProductsSearch";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <ProductsFilter />
            <ProductsSearch />
          </Form>
        </Col>
        <Col>
        
        </Col>
      </Row>
    </Container>
  );
}

export default App;
