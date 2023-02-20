import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import classes from './ProductsSearch.module.css'

function ProductsSearch({ products, setProducts }) {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  }
  
  useEffect(() => {
    if(searchTerm) {
      const filteredProducts = products.filter((product) => {
        const name = product?.productName.toLowerCase()
        if (searchTerm && name.startsWith(searchTerm)) {
          return true
        }
        return false
      })
      if (filteredProducts.length > 0) {
        setProducts(filteredProducts)
      }else{
        setProducts([])
      }
    }else{
      setProducts(products)
    }
  }, [searchTerm])
  
  return (
    <Form.Group controlId="formSearch" className={classes.ProductSearchContainer}>
      <Form.Label>Search:</Form.Label>
      <Form.Control
        type="text"
        placeholder="Type the product name:"
        value={searchTerm}
        onFocus={handleSearchChange}
        onBlur={handleSearchChange}
        onChange={handleSearchChange}
      />
    </Form.Group>
  );
}

export default ProductsSearch;
