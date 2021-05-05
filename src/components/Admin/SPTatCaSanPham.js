import React from 'react';
import {Form,Col,Row,Button,Container,Table} from 'react-bootstrap';
import { FaTrash,FaPen } from 'react-icons/fa';
const SPTatCaSanPham = () => {
	return(
			<Container>
				<Row style={{marginTop:'1rem'}}>
					<Col sm={6}>
						<Form inline>
						  <Form.Label className="my-1 mr-2">
						    Tên sản phẩm 
						  </Form.Label>
						  <Form.Control
						    className="mb-0"
						    id="inlineFormInputName2"
						    placeholder="Nhập vào"
						  />
						</Form>
					</Col>
					<Col sm={6}>
						<Form inline>
						  <Form.Label className="my-1 mr-2">
						    Danh mục
						  </Form.Label>
						  <Form.Control
						    className="mb-0"
						    id="inlineFormInputName2"
						    placeholder="Nhập vào"
						  />
						</Form>
					</Col>
				</Row>

				<Row style={{marginTop:'1rem'}}>
					<Col sm={6}>
						<Form inline>
						  <Form.Label className="my-1 mr-2">
						    Kho hàng
						  </Form.Label>
						  <Form.Control
						    className="mb-0"
						    id="inlineFormInputName2"
						    placeholder="Nhập vào"
						    style={{width:'8rem'}}
						  />
						  <p>~</p>
						   <Form.Control
						    className="mb-0"
						    id="inlineFormInputName2"
						    placeholder="Nhập vào"
						    style={{width:'8rem'}}
						  />
						</Form>

					</Col>
					<Col sm={6}>
						<Form inline>
						  <Form.Label className="my-1 mr-2">
						    Đã bán
						  </Form.Label>
						  <Form.Control
						    className="mb-0"
						    id="inlineFormInputName2"
						    placeholder="Nhập vào"
						    style={{width:'4rem'}}
						  />
						  <p>~</p>
						   <Form.Control
						    className="mb-0"
						    id="inlineFormInputName2"
						    placeholder="Nhập vào"
						    style={{width:'4rem'}}
						  />
						</Form>
					</Col>
				</Row>
				<Row style={{marginTop:'1rem'}}>
					<Col sm={6}>
						<Button style={{width:'50%'}}>Tìm</Button>
					</Col>
					<Col sm={6}>
						<a href="/themsanpham"> 
							<Button style={{width:'50%'}}> Thêm sản phẩm</Button> 
						</a>
					</Col>
				</Row>
				<Row style={{marginTop:'2rem'}}>
	            	<h4 style={{color:'black'}}>Sản phẩm</h4>
	            	<Table striped bordered hover style={{marginTop:'1rem'}}>
					  <thead>
					    <tr>
					      <th>Tên sản phẩm</th>
					      <th>SKU phân loại</th>
					      <th>Phân loại hàng</th>
					      <th>Giá</th>
					      <th>Kho hàng</th>
					      <th>Đã bán</th>
					      <th>Sửa thông tin</th>
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
					      	<p>X1Nano02NS</p>
					      </td>

					       <td>
					      	<p>Lenovo</p>
					      </td>

					      <td>
					      	21.000.000 đ
					      </td>

					      <td>
					      	2
					      </td>

					      <td>
					      	0
					      </td>

					      <td style={{display:'flex',justifyContent:'space-evenly'}}>
					      	<a href="/suathongtin"><FaPen/></a>
					      	<a href="#chitiet"><FaTrash/></a>
					      </td>

					    </tr>
					  </tbody>
					</Table>
	            </Row>
			</Container>
		)
}
export default SPTatCaSanPham;