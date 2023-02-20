import { useState } from "react";
import { Form, Dropdown } from "react-bootstrap";
import classes from "./ProductsFilter.module.css";

function ProductsFilter({ products, setProducts }) {
  const [filterType, setFilterType] = useState("All");
  
  const handleFilterChange = (event) => {
    setFilterType(event);
    if (event === "All") {
      setProducts(products);
    } else {
      const filteredProducts = products.filter((product) => product.type === event)
      if (filteredProducts.length > 0) {
        setProducts(filteredProducts);
      }
    }
  };

  const handleBlur = () => {
    setFilterType("All");
    setProducts(products);
  };

  const handleSelect = (eventKey) => {
    // setFilterType(eventKey);
    // console.log(eventKey);
    // if (eventKey === "All") {
    //   // setProducts(products);
    // } else {
    //   // setProducts(products.filter((product) => product.type === eventKey));
    // }
  };

  return (
    <Form.Group
      controlId="formTypeFilter"
      className={classes.ProductFilterContainer}
    >
      <Form.Label>Filter by </Form.Label>
      <Dropdown onBlur={handleBlur} onSelect={handleSelect}>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          {filterType}
        </Dropdown.Toggle>
        <Dropdown.Menu className={classes.DropdownMenu}>
          <Dropdown.Item onClick={() => { handleFilterChange("All") }}>
            All
          </Dropdown.Item>
          <Dropdown.Item onClick={() => { handleFilterChange("Beer") }}>
            Beer
          </Dropdown.Item>
          <Dropdown.Item onClick={() => { handleFilterChange("Wine") }}>
            Wine
          </Dropdown.Item>
          <Dropdown.Item onClick={() => { handleFilterChange("Spirits") }}>
            Spirits
          </Dropdown.Item>
          <Dropdown.Item onClick={() => { handleFilterChange("Cider") }}>
            Cider
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Form.Group>
  );
}

export default ProductsFilter;
