import React from "react";
import {Card,ListGroup,ListGroupItem} from "react-bootstrap";

const ProductItems = () =>{
  return (
    <Card style={{ width: '12.6rem',marginLeft:"0" }}>
      <Card.Img variant="top" src="https://lumen.thinkpro.vn//backend/uploads/product/color_images/2020/10/3/xps9310s-01.jpg" />
      <Card.Body>
      <h6>Dell XPS 13 7390</h6>
      <p style={{fontSize:"13"}}>SKUsadsd</p>
      <p style={{color:"#ed8021"}}> asd</p>  
      </Card.Body>     
    </Card>
)
}
export default ProductItems;