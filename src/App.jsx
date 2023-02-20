import { Container, Row, Col, Form } from "react-bootstrap";
import ProductsFilter from "./components/ProductsFilter";
import ProductsSearch from "./components/ProductsSearch";
import ProductsList from "./components/ProductsList";
import dProducts from "./products.json";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(dProducts)
  }, [])

  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <ProductsFilter setProducts={setProducts} products={dProducts} />
            <ProductsSearch setProducts={setProducts} products={dProducts} />
          </Form>
        </Col>
      </Row>
      <>
        <ProductsList returnedProducts={products} />
      </>
    </Container>
  );
}

export default App;
