import { Row, Col, Card } from "react-bootstrap";
import classes from "./ProductsList.module.css";

function ProductsList({returnedProducts}) {  

  return (
    <Row className={classes.CustomRow}>
      {returnedProducts.map((product) => (
        <Col sm={6} md={4} className={classes.CustomCol} key={product.index}>
          <Card.Text className={classes.CustomItemOnSaleContainer}>
            <span
              className={classes.ItemOnSale}
              style={{ display: product.isSale ? "block" : "none" }}
            >
              On Sale!
            </span>
          </Card.Text>
          <Card className={classes.CustomCard}>
            <Card.Img
              variant="top"
              className={classes.ProductImage}
              src={product.productImage} 
              alt={product.CustomProductName}
            />
            <Card.Body className={classes.CustomCardBody}>
              <Card.Text className={classes.CustomCardTextContainer}>
                <a href="#" className={classes.CustomProductName}>
                  {product.productName}
                </a>
                <p className={classes.CustomProductPrice}>{product.price}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default ProductsList;
