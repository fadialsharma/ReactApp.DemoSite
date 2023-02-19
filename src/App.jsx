import { Container, Row, Col, Form } from "react-bootstrap";
import ProductsFilter from "./components/ProductsFilter";
import ProductsSearch from "./components/ProductsSearch";
import ProductsList from "./components/ProductsList";

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
      </Row>
      <>
        <ProductsList />
      </>
    </Container>
  );
}

export default App;
