import React from 'react';
import {Form,Col,Row,Button,Container,Table,Card} from 'react-bootstrap';
import { FaTrash,FaPen } from 'react-icons/fa';
const SPTatCaSanPham = () => {
	return(
			<Container>
				<Row style={{padding:'1rem'}}>
					<Card style={{margin:'2rem',width:'100%',height:'20rem',padding:'2rem'}}>
						{/*Row 1*/}
						<Row>
							{/*Col 1 of 1*/}
							<Col md={6}>
								<Form inline>
									<Form.Control as="select" style={{width:'12rem',fontSize:'12px'}}>
									    <option value="0">Tên sản phẩm</option>
									    <option value="1">SKU sản phẩm</option>
									    <option value="2">Mã sản phẩm</option>
								  	</Form.Control>
								  	<Form.Control placeholder="Nhập vào" type="text" style={{width:'18rem',fontSize:'12px'}}>
								  	</Form.Control> 
								</Form>
							</Col>

							{/*Col 1 of 2*/}
							<Col md={6}>
								<Form inline>
									
									  	<Form.Control as="select" style={{width:'28rem',fontSize:'12px'}}>
										    <option value="0">Thương hiệu</option>
										    <option value="1">Alienware</option>
										    <option value="2">Lenovo</option>
										    <option value="3">Nexus</option>
										    <option value="4">Dell</option>
										    <option value="5">Hp</option>
									  	</Form.Control>
								</Form>
							</Col>
						</Row>

						{/*Row 2*/}
						<Row style={{marginTop:'2rem'}}>

							{/*Col 1 of 2*/}
							<Col md={6}>
								<Form inline>
									<p style={{fontSize:'12px'}}>Kho hàng</p>
									<Form.Control placeholder="Nhập vào" type="text" style={{width:'30%',marginLeft:'3.25rem'}}/>
									<p style={{marginLeft:'1.5rem'}}>-</p>
									<Form.Control placeholder="Nhập vào" type="text" style={{width:'30%',marginLeft:'1.5rem'}}/>	
								</Form>
							</Col>

							{/*Col 2 of 2*/}
							<Col md={6}>
								<Form inline>
									<p style={{fontSize:'12px'}}>Đã bán</p>
									<Form.Control placeholder="Nhập vào" type="text" style={{width:'30%',marginLeft:'2.4rem'}}/>
									<p style={{marginLeft:'1.5rem'}}>-</p>
									<Form.Control placeholder="Nhập vào" type="text" style={{width:'30%',marginLeft:'1.5rem'}}/>	
								</Form>
							</Col>
						</Row>

						{/*Row 3*/}
						<Row style={{marginTop:'2rem'}}>

							{/*Col 1 of 3*/}
							<Col md={1} style={{display:'flex'}}>
								<Button>Tìm</Button>								
							</Col>

							{/*Col 2 of 3*/}
							<Col md={1}>
								<Button style={{backgroundColor:'white',color:'black'}}>Nhập lại</Button>
							</Col>

							{/*Col 3 of 3*/}
							<Col md={1}>
								
							</Col>

						</Row>
					</Card>
				</Row>
				<Row style={{padding:'2rem'}}>
	            	<h4 style={{color:'black',fontWeight:'bold'}}>Sản phẩm</h4>
	            	<Table  bordered hover style={{marginTop:'1rem'}}>
					  	<thead>
						    <tr>
						    	
							    <th style={{fontWeight:'normal'}}>Tên sản phẩm</th>
							    <th style={{fontWeight:'normal'}}>SKU phân loại</th>
							    <th style={{fontWeight:'normal'}}>Phân loại hàng</th>
							    <th style={{fontWeight:'normal'}}>Giá</th>
							    <th style={{fontWeight:'normal'}}>Kho hàng</th>
							    <th style={{fontWeight:'normal'}}>Đã bán</th>
							    <th>Sửa thông tin</th>
						    </tr>
					  	</thead>
					  	<tbody>
						    <tr>
						    	<td>
							      	<Row style={{marginLeft:'1%'}}>
							      		<Col md={4}>
							      			<img src="https://toplap.vn/storage/img/45dSXe4rdirzxVakFCk4okvTGs9vCpWCcQ0ZttWm.jpeg" width="100" height="100"/>
							      		</Col>
							      		<Col md={8}>
							      			<p>ThinkPad P1 Gen2</p>
							      		</Col>
							      	</Row>
						      	</td>
						      	<td><p>X1Nano02NS</p></td>
						      	<td><p>Lenovo</p></td>
						      	<td>21.000.000 đ</td>
						      	<td>2</td>
						      	<td>0</td>
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