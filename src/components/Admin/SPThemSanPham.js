import React from 'react';
import AdminNavigationBar from '../Admin/AdminNavigationBar';
import {Container,Row,Col,Button,Form} from 'react-bootstrap';
const SPThemSanPham = () => {
	return(
		<div>
			<AdminNavigationBar/>
			<Container style={{marginTop:'1rem'}}>
				<h4>Thêm sản phẩm</h4>
				<div>
		
			<Container style={{margin:'auto',padding:'2rem',marginTop:'2rem'}}>
				<Row>
					<Col sm={6}>
						<Container>
							<img src="https://phucanhcdn.com/media/product/39638_gaming_legion_5_ha5.jpg" alt="Lenovo-Legion"
							width="70%"
							height="70%"
							/>
						</Container>
						<Button style={{marginTop:'0.7rem',marginLeft:'10rem'}}>Xác nhận thêm</Button>
					</Col>
					<Col sm={6}>
						<div style={{
							display:'flex',
							flexDirection:'column'
						}}>
							<div style={{display:'flex',width:"10%"}}>
								<Form.Label className="mb-0">Tên sản phẩm</Form.Label>
								<Form.Control type="text" placeholder="Nhập tên sản phẩm"/>
							</div>

						</div>
						

					</Col>
				</Row>
			</Container>
		</div>
			</Container>
		</div>
		)
}
export default SPThemSanPham;