import React from 'react';
import {Col,Row,Container,Form} from 'react-bootstrap'
const TrangDatHang = () => {
  return(
  	<Container style={{marginTop:'2rem'}}>
  		<Row>
	  			<Col sm={8}>
	  				<Form>
					  <Form.Row>

					  	<h6>Thông tin người nhận</h6>
					    <Form.Group as={Col} controlId="formGridEmail" >
					      <Form.Control type="text" placeholder="UserName" />
					    </Form.Group>

					    <Form.Group as={Col} controlId="formGridPassword">
					      <Form.Control type="text" placeholder="SĐT" />
					    </Form.Group>
					  </Form.Row>
					  </Form>
	  			</Col>
  			<Col sm={4}>sm=4</Col>
  		</Row>
  	</Container>
	)
  }
export default TrangDatHang;