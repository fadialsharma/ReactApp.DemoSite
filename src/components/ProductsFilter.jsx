import { useEffect, useState } from "react";
import { Form, Dropdown } from "react-bootstrap";
import classes from "./ProductsFilter.module.css";

function ProductsFilter({ products, setProducts }) {
  const [filterType, setFilterType] = useState("All");

  const handleFilterChange = (type) => {
    setFilterType(type);
  };

  const handleBlur = () => {
    // setFilterType("All");
  };

  useEffect(() => {
    console.log(filterType);
    if (filterType === "All") {
      setProducts(products);
    } else {
      const filteredProducts = products.filter((product) => product.type === filterType)
      if (filteredProducts.length > 0) {
        setProducts(filteredProducts);
      } else {
        setProducts([]);
      }
    }
  }, [filterType])

  return (
    <Form.Group
      controlId="formTypeFilter"
      className={classes.ProductFilterContainer}
    >
      <Form.Label>Filter by </Form.Label>
      <Dropdown onBlur={handleBlur} >
        <Dropdown.Toggle variant="primary" id="dropdown-basic" className={classes.Button}>
          {filterType}
        </Dropdown.Toggle>
        <Dropdown.Menu className={classes.DropdownMenu}>
          <Dropdown.Item eventKey={1} onClick={() => { handleFilterChange("All") }}>
            All
          </Dropdown.Item>
          <Dropdown.Item eventKey={2} onClick={() => { handleFilterChange("Beer") }}>
            Beer
          </Dropdown.Item>
          <Dropdown.Item eventKey={3} onClick={() => { handleFilterChange("Wine") }}>
            Wine
          </Dropdown.Item>
          <Dropdown.Item eventKey={4} onClick={() => { handleFilterChange("Spirits") }}>
            Spirits
          </Dropdown.Item>
          <Dropdown.Item eventKey={5} onClick={() => { handleFilterChange("Cider") }}>
            Cider
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Form.Group>
  );
}

export default ProductsFilter;
