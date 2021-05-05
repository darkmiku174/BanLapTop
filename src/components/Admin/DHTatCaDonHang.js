import React from 'react';
import { FaSearch } from 'react-icons/fa';
import {Row,Col,Form,Container,InputGroup,Table} from 'react-bootstrap';
const DHTatCaDonHang = () => {
	return(
			<Container style={{marginTop:'1rem'}}>
				
				<Row>
					<Form>
	                    <Form.Group as={Col}>
	                        <InputGroup>
	                            <InputGroup.Prepend >
	                                <InputGroup.Text>
	                                    <FaSearch/>
	                                </InputGroup.Text>
	                            </InputGroup.Prepend>
	                            <Form.Control
	                                type="text"
	                                placeholder="Tìm kiếm đơn hàng"
	                            />
	                        </InputGroup>
	                 	</Form.Group>
	                </Form>
	            </Row>

	            <Row>
	            	<h4 style={{color:'black'}}>Đơn hàng</h4>
	            	<Table striped bordered hover style={{marginTop:'1rem'}}>
					  <thead>
					    <tr>
					      <th>Sản phẩm</th>
					      <th>Tổng đơn</th>
					      <th>Trạng thái</th>
					      <th>Đếm ngược</th>
					      <th>Vận chuyển</th>
					      <th>Thao tác</th>
					    </tr>
					  </thead>
					  <tbody>
					    <tr>

					      <td>
					      	<Row style={{marginLeft:'1%'}}>
					      		<Col sm={4}>
					      			<img src="https://toplap.vn/storage/img/45dSXe4rdirzxVakFCk4okvTGs9vCpWCcQ0ZttWm.jpeg" width="100" height="100"/>
					      		</Col>
					      		<Col sm={8}>
					      			<p>ThinkPad P1 Gen2</p>
					      		</Col>
					      	</Row>
					      </td>

					      <td>
					      	<p>21.000.000 đ</p>
					      </td>

					       <td>
					      	<p>Đã giao</p>
					      </td>

					      <td></td>
					      <td></td>

					      <td>
					      	<a href="#chitiet">Xem chi tiết</a>
					      </td>

					    </tr>
					  </tbody>
					</Table>
	            </Row>

			</Container>
		)
}
export default DHTatCaDonHang;