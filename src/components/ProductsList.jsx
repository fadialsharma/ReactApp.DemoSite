import { Row, Col, Card } from "react-bootstrap";
import products from "../products.json";
import classes from "./ProductsList.module.css"

// console.log(products);

function ProductsList() {
  const returnedProducts = products.filter((product) => {
    return (
      product
    )
  })

  return (
    <Row className={classes.CustomRow}>
      {returnedProducts.map((product) => (
        <Col sm={6} md={4} className={classes.CustomCol} key={product.index}>
          <Card.Text className={classes.CustomItemOnSaleContainer}>
              <p className={classes.ItemOnSale}>{product.isSale ? "On Sale!" : null}</p>
            </Card.Text>
          <Card className={classes.CustomCard}>
            <Card.Img variant="top" className={classes.ProductImage} src={product.productImage} />
            <Card.Body className={classes.CustomCardBody}>
              <Card.Text className={classes.CustomCardTextContainer}>
                <p className={classes.CustomProductName}>{product.productName}</p> 
                <p className={classes.CustomProductPrice}>{product.price}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default ProductsList;
