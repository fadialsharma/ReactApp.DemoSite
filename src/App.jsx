import { useState } from "react";
import { Container, Row, Col, Form, Dropdown } from 'react-bootstrap';
import products from "./products.json";

function App() {
  const [filterType, setFilterType] = useState('');
  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
    // console.log(setFilterType);
  }

  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <Form.Group controlId="formTypeFilter">
              <Form.Label>Filter by Type:</Form.Label>
              <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  {filterType ? filterType : 'Select Type'}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={handleFilterChange} value="">All</Dropdown.Item>
                  <Dropdown.Item onClick={handleFilterChange} value="Beer">Beer</Dropdown.Item>
                  <Dropdown.Item onClick={handleFilterChange} value="Wine">Wine</Dropdown.Item>
                  <Dropdown.Item onClick={handleFilterChange} value="Spirits">Spirits</Dropdown.Item>
                  <Dropdown.Item onClick={handleFilterChange} value="Cider">Cider</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
