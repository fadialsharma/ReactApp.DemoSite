import { useState } from 'react';
import { Form } from 'react-bootstrap';
import classes from './ProductsSearch.module.css'

function ProductsSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  }
  // const filteredProducts = productsData.filter(product =>
  //   product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  return (
    <Form.Group controlId="formSearch" className={classes.ProductSearchContainer}>
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
