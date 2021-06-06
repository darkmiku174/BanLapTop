import React from 'react';
import {Form,Col,Row,Button,Container,Table,Card} from 'react-bootstrap';
import { Breadcrumbs} from '@material-ui/core';
import { FaTrash,FaPen } from 'react-icons/fa';
import { Pagination } from '@material-ui/lab';
const SPTatCaSanPham = () => {
	return(
			<div style={{backgroundColor:'white'}}>

				<Row >
					<Card style={{width:'100%',padding:'2rem',boxShadow: '0px 0px 0px black',borderRadius:'0px'}}>
						{/*Row 1*/}
						<Row>
							{/*Col 1 of 1*/}
							<Col md={6}>
								<Form inline>
									<Form.Control as="select" style={{width:'9rem',fontSize:'12px'}}>
									    <option value="0">Tên sản phẩm</option>
									    <option value="1">SKU sản phẩm</option>
									    <option value="2">Mã sản phẩm</option>
								  	</Form.Control>
								  	<Form.Control placeholder="Nhập vào" type="text" style={{width:'20.2rem',fontSize:'12px'}}>
								  	</Form.Control> 
								</Form>
							</Col>

							{/*Col 1 of 2*/}
							<Col md={6}>
								<Form inline>
									
									  	<Form.Control as="select" style={{width:'29rem',fontSize:'12px'}}>
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
								<Form inline style={{marginLeft:'0.2rem'}}>
									<p style={{fontSize:'12px'}}>Kho hàng</p>
									<Form.Control placeholder="Nhập vào" type="text" style={{fontSize:'12px',width:'30%',marginLeft:'3.3rem'}}/>
									<p style={{marginLeft:'1.5rem'}}>-</p>
									<Form.Control placeholder="Nhập vào" type="text" style={{fontSize:'12px',width:'30%',marginLeft:'1.5rem'}}/>	
								</Form>
							</Col>

							{/*Col 2 of 2*/}
							<Col md={6}>
								<Form inline>
									<p style={{fontSize:'12px'}}>Đã bán</p>
									<Form.Control placeholder="Nhập vào" type="text" style={{fontSize:'12px',width:'30%',marginLeft:'4rem'}}/>
									<p style={{marginLeft:'1.5rem'}}>-</p>
									<Form.Control placeholder="Nhập vào" type="text" style={{fontSize:'12px',width:'30%',marginLeft:'1.5rem'}}/>	
								</Form>
							</Col>
						</Row>

						{/*Row 3*/}
						<Row style={{marginTop:'2rem'}}>

							{/*Col 1 of 3*/}
							<Col md={1} style={{display:'flex'}}>
								<Button className="btn" style={{fontSize:'12px',width:'5rem',backgroundColor:'#3ac9c9'}}>Tìm</Button>								
							</Col>

							{/*Col 2 of 3*/}
							<Col md={2}>
								<Button className="btn" style={{fontSize:'12px',backgroundColor:'white',color:'black'}}>Nhập lại</Button>
							</Col>

							{/*Col 3 of 3*/}
							<Col md={9}>
								
							</Col>

						</Row>
					</Card>
				</Row>
				<Row>
	            	<Table  bordered hover style={{backgroundColor:'white',fontSize:'12px'}}>
					  	<thead>
						    <tr>	
							    <th style={{fontSize:'13px'}}>Tên sản phẩm</th>
							    <th style={{fontSize:'13px'}}>SKU phân loại</th>
							    <th style={{fontSize:'13px'}}>Phân loại hàng</th>
							    <th style={{fontSize:'13px'}}>Giá</th>
							    <th style={{fontSize:'13px'}}>Kho hàng</th>
							    <th style={{fontSize:'13px'}}>Đã bán</th>
							    <th>Sửa thông tin</th>
						    </tr>
					  	</thead>
					  	<tbody>
						    <tr>
						    	<td>
							      	<Row style={{marginLeft:'1%'}}>
							      		<Col md={4}>
							      			<img src="https://toplap.vn/storage/img/45dSXe4rdirzxVakFCk4okvTGs9vCpWCcQ0ZttWm.jpeg" width="200px" height="200px"/>
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
						      	<td style={{display:'flex',border:'0px',padding:'2rem',justifyContent:'space-around'}}>
							      	<a href="/suathongtin"><FaPen/></a>
							      	<a href="#chitiet"><FaTrash/></a>
						    	</td>
						    </tr>
						     <tr>
						    	<td>
							      	<Row style={{marginLeft:'1%'}}>
							      		<Col md={4}>
							      			<img src="https://toplap.vn/storage/img/45dSXe4rdirzxVakFCk4okvTGs9vCpWCcQ0ZttWm.jpeg" width="200px" height="200px"/>
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
						      	<td style={{display:'flex',border:'0px',padding:'2rem',justifyContent:'space-around'}}>
							      	<a href="/suathongtin"><FaPen/></a>
							      	<a href="#chitiet"><FaTrash/></a>
						    	</td>
						    </tr>
					  	</tbody>
					  		 <tr>	
							    <th style={{fontSize:'13px'}}>Tên sản phẩm</th>
							    <th style={{fontSize:'13px'}}>SKU phân loại</th>
							    <th style={{fontSize:'13px'}}>Phân loại hàng</th>
							    <th style={{fontSize:'13px'}}>Giá</th>
							    <th style={{fontSize:'13px'}}>Kho hàng</th>
							    <th style={{fontSize:'13px'}}>Đã bán</th>
							    <th>Sửa thông tin</th>
						    </tr>
					</Table>
	            </Row>
				<Row style={{marginTop:'1rem',float:'right'}}>
					<Pagination count={10}/>
				</Row>
			</div>
		)
}
export default SPTatCaSanPham;