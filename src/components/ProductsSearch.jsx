import { useState } from 'react';
import { Form } from 'react-bootstrap';

function ProductsSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  }
  return (
    <Form.Group controlId="formSearch">
      <Form.Label>Search:</Form.Label>
      <Form.Control
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </Form.Group>
  );
}

export default ProductsSearch;
