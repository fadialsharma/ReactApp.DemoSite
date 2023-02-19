import { useState } from "react";
import { Form, Dropdown } from "react-bootstrap";
import classes from "./ProductsFilter.module.css";

function ProductsFilter({ products, setProducts }) {
  const [filterType, setFilterType] = useState("All");

  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
    if (event.target.value === "All") {
      setProducts(products);
    } else {
      setProducts(
        products.filter((product) => product.type === event.target.value)
      );
    }
  };
  const handleBlur = () => {
    setFilterType("All");
    setProducts(products);
  };
  const handleSelect = (eventKey) => {
    setFilterType(eventKey);
    if (eventKey === "All") {
      setProducts(products);
    } else {
      setProducts(products.filter((product) => product.type === eventKey));
    }
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
          <Dropdown.Item onClick={handleFilterChange} value="All">
            All
          </Dropdown.Item>
          <Dropdown.Item onClick={handleFilterChange} value="Beer">
            Beer
          </Dropdown.Item>
          <Dropdown.Item onClick={handleFilterChange} value="Wine">
            Wine
          </Dropdown.Item>
          <Dropdown.Item onClick={handleFilterChange} value="Spirits">
            Spirits
          </Dropdown.Item>
          <Dropdown.Item onClick={handleFilterChange} value="Cider">
            Cider
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Form.Group>
  );
}

export default ProductsFilter;
