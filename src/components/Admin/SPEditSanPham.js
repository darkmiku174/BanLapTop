import React,{useState,useRef,useEffect} from 'react';
import AdminNavigationBar from '../Admin/AdminNavigationBar';
import {Container,Row,Col,Button,Form,InputGroup,Table} from 'react-bootstrap';
const SPEditSanPham = () => {

	return(
			<>
			<div style={{display:'flex',flexDirection:'column'}}>
	 			<Container style={{backgroundColor:'#ebebeb'}}>
	 				{/*Parent Row 1*/}
	 				<Row style={{margin:'2rem',backgroundColor:'white',padding:'4rem'}}>
	 					<h4 style={{fontWeight:'bold'}}>Thông tin cơ bản</h4>
	 					<Container style={{marginTop:'3rem'}}>
	 						<Col>
	 							<div className="parent-row-1-container" style={{display:'flex',justifyContent:'space-between'}}>
		 							<div className="child-row-container">
				 						{/*Child Row 1*/}
				 						<Row style={{marginTop:'2rem'}}>
				 							<Col md={4}>
				 								<p style={{marginTop:'20%',fontSize:'12px'}}>Hình ảnh sản phẩm</p>
				 							</Col>
				 							<Col md={8}>
				 								<div className="img-container">
						 							<form>
						 								<img src="#" style={{width:'20rem',height:'20rem'}}/>
						 								<input type="file" style={{display:"none"}}/>
						 							</form>
						 						</div>
				 							</Col>
				 						</Row>
				 						{/*Child Row 2*/}
				 						<Row style={{marginTop:'2rem'}}>
				 							<Col md={4}>
				 								<p style={{fontSize:'12px'}}>Tên sản phẩm</p>
				 							</Col>
				 							<Col md={8}>
				 								<Form>
						 							<Form.Control style={{width:'30rem'}} type="text"/>
						 						</Form>
				 							</Col>
				 						</Row>

				 						{/*Child Row 3*/}
				 						<Row style={{marginTop:'2rem'}}>
				 							<Col md={4}>
				 								<p style={{fontSize:'12px'}}>Thương hiệu</p>
				 							</Col>
				 							<Col md={8}>
				 								<Form>
						 							<Form.Group controlId="exampleForm.ControlSelect1">
												    <Form.Control as="select">
												      <option>Dell</option>
												      <option>Alienware</option>
												      <option>Lenovo</option>
												      <option>Hp</option>
												      <option>Apple</option>
												    </Form.Control>
												  	</Form.Group>
						 						</Form>
				 							</Col>
				 						</Row>
				 					</div>
				 					<div className="product-details-table">
				 						<Table striped bordered style={{width:'40rem'}}>
										  <thead>
										    <tr>
										      <th></th>
										      <th></th>
										      <th></th>
										      
										    </tr>
										  </thead>
										  <tbody>

										    <tr className="tr-edit">
										      <td style={{padding:'5px'}}>1</td>
										      <td style={{padding:'5px'}}>Vi xử lý</td>
										      <td style={{padding:'0px'}}><Form.Control style={{width:'100%'}} size="lg" type="text" placeholder="Nhập vào"/></td>
										    </tr>
										    <tr className="tr-edit">
										      <td style={{padding:'5px'}}>2</td>
										      <td style={{padding:'5px'}}>Màn hình</td>
										      <td style={{padding:'0px'}}><Form.Control style={{width:'100%'}} size="lg" type="text" placeholder="Nhập vào"/></td>
										    </tr>
										    <tr className="tr-edit">
										      <td style={{padding:'5px'}}>3</td>
										      <td style={{padding:'5px'}}>Độ phủ màu</td>
										      <td style={{padding:'0px'}}><Form.Control style={{width:'100%'}} size="lg" type="text" placeholder="Nhập vào"/></td>
										    </tr>
										    <tr className="tr-edit">
										      <td style={{padding:'5px'}}>4</td>
										      <td style={{padding:'5px'}}>RAM</td>
										      <td style={{padding:'0px'}}><Form.Control style={{width:'100%'}} size="lg" type="text" placeholder="Nhập vào"/></td>
										    </tr>
										    <tr className="tr-edit">
										      <td style={{padding:'5px'}}>5</td>
										      <td style={{padding:'5px'}}>Card đồ họa</td>
										      <td style={{padding:'0px'}}><Form.Control style={{width:'100%'}} size="lg" type="text" placeholder="Nhập vào"/></td>
										    </tr>
										    <tr className="tr-edit">
										      <td style={{padding:'5px'}}>6</td>
										      <td style={{padding:'5px'}}>Lưu trữ</td>
										      <td style={{padding:'0px'}}><Form.Control style={{width:'100%'}} size="lg" type="text" placeholder="Nhập vào"/></td>
										    </tr>
										    <tr className="tr-edit">
										      <td style={{padding:'5px'}}>7</td>
										      <td style={{padding:'5px'}}>Pin</td>
										      <td style={{padding:'0px'}}><Form.Control style={{width:'100%'}} size="lg" type="text" placeholder="Nhập vào"/></td>
										    </tr>
										    <tr className="tr-edit">
										      <td style={{padding:'5px'}}>8</td>
										      <td style={{padding:'5px'}}>Cổng kết nối</td>
										      <td style={{padding:'0px'}}><Form.Control style={{width:'100%'}} size="lg" type="text" placeholder="Nhập vào"/></td>
										    </tr>
										    <tr className="tr-edit">
										      <td style={{padding:'5px'}}>9</td>
										      <td style={{padding:'5px'}}>Cân nặng</td>
										      <td style={{padding:'0px'}}><Form.Control style={{width:'100%'}} size="lg" type="text" placeholder="Nhập vào"/></td>
										    </tr>
										    <tr className="tr-edit">
										      <td style={{padding:'5px'}}>10</td>
										      <td style={{padding:'5px'}}>Hệ điều hành</td>
										      <td style={{padding:'0px'}}><Form.Control style={{width:'100%'}} size="lg" type="text" placeholder="Nhập vào"/></td>
										    </tr>
										    <tr className="tr-edit">
										      <td style={{padding:'5px'}}>11</td>
										      <td style={{padding:'5px'}}>Màu sắc</td>
										      <td style={{padding:'0px'}}><Form.Control style={{width:'100%'}} size="lg" type="text" placeholder="Nhập vào"/></td>
										    </tr>

										  </tbody>
										</Table>
				 					</div>
			 					</div>
	 						</Col>
	 					</Container>
	 				</Row>

	 				{/*Parent Row 2*/}
	 				<Row style={{margin:'2rem',backgroundColor:'white',padding:'4rem'}}>
	 					<h4 style={{fontWeight:'bold'}}>Thông tin bán hàng</h4>
	 					<Container style={{marginTop:'3rem'}}>
	 						{/*Child Row 1*/}
	 						<Row style={{marginTop:'2rem'}}>
	 							<Col md={2}>
	 								<p style={{fontSize:'12px'}}>Giá</p>
	 							</Col>
	 							<Col md={10}>
	 								<Form>
	 									<InputGroup className="mb-2">
		 									<InputGroup.Prepend>
									          <InputGroup.Text>₫</InputGroup.Text>
									        </InputGroup.Prepend>
				 							<Form.Control type="text"/>
				 						</InputGroup>
			 						</Form>
	 							</Col>
	 						</Row>
	 						{/*Child Row 2*/}
	 						<Row style={{marginTop:'2rem'}}>
	 							<Col md={2}>
	 								<p style={{fontSize:'12px'}}>Kho hàng</p>
	 							</Col>
	 							<Col md={10}>
	 								<Form>
			 							<Form.Control style={{width:'30rem'}} type="text"/>
			 						</Form>
	 							</Col>
	 						</Row>

	 					</Container>
	 				</Row>

	 				{/*Parent Row 3*/}
	 				<Row style={{margin:'2rem',backgroundColor:'white',padding:'4rem'}}>
	 					<h4 style={{fontWeight:'bold'}}>Thông tin khác</h4>
	 					 <Container style={{marginTop:'3rem'}}>

	 						{/*Child Row 1*/}
	 						<Row style={{marginTop:'2rem'}}>
	 							<Col md={2}>
	 								<p style={{fontSize:'12px'}}>SKU</p>
	 							</Col>
	 							<Col md={10}>
	 								<Form>
			 							<Form.Control  style={{width:'30rem'}} type="text"/>
			 						</Form>
	 							</Col>
	 						</Row>

	 						{/*Child Row 2*/}
	 						<Row style={{marginTop:'2rem'}}>
	 							<Col md={2}>
	 								<p style={{fontSize:'12px'}}>Tình trạng</p>
	 							</Col>
	 							<Col md={10}>
	 								<Form>
			 							<Form.Group controlId="exampleForm.ControlSelect1">
									    <Form.Control as="select">
									      <option>Mới</option>
									      <option>Đã sử dụng</option>
									    </Form.Control>
									  	</Form.Group>
			 						</Form>
	 							</Col>
	 						</Row>
	 					</Container>
	 				</Row>
	 			</Container>

	 			<Container style={{margin:'3rem'}}>
	 				<a href="/admin">
		 				<Button style={{
		 					position:'relative',
		 					float:'right',
		 					marginRight:'8rem',
		 					width:'10rem',
		 					backgroundColor:'white',
		 					color:'black'
		 					}}>Hủy</Button>
	 				</a>
	 				<Button style={{
	 					position:'relative',
	 					float:'right',
	 					marginRight:'4rem',
	 					width:'10rem'
	 					}}>Cập nhật</Button>
	 			</Container>
 		</div>
 		</>
		)
}
export default SPEditSanPham;
