import React from 'react';
import {Container,Row,Col,Form,Button,InputGroup,Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';
const THAddThuongHieu = () => {
	return(
				<Container>
				<div className="trademark-details-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
											<div className="child-row-container" style={{marginLeft:"20rem",border:'5px solid #3ac9c9',width:'40%',height:'36rem',marginTop:'1rem',borderRadius:'10px'}}>
												<Row style={{textAlign:'center',marginTop:'1rem'}}>
													<h5 style={{marginLeft:'33%'}}>Thêm thương hiệu</h5>
												</Row>
												{/*Child Row 1*/}
												<Row style={{ marginTop: '2rem' }}>
													<Col md={4}>
														<p style={{ fontSize: '12px' }}>Hình ảnh sản phẩm</p>
													</Col>
													<Col md={8}>
														<div className="img-container">
															<form style={{display:'flex',flexDirection:'column'}}>
																<img src="#" style={{ width: '15rem', height: '15rem' }} />
																<input type="text" placeholder="Nhập đường dẫn hình ảnh" style={{ width: '15rem',border:'1px solid #c0c0c0' }} />
															</form>
														</div>
													</Col>
												</Row>

												{/*Child Row 2*/}
												<Row style={{ marginTop: '2rem' }}>
													<Col md={4}>
														<p style={{ fontSize: '12px' }}>Thương hiệu</p>
													</Col>
													<Col md={8}>
														<Form>
															<Form.Group controlId="exampleForm.ControlSelect1" style={{width:'15rem'}}>
																<Form.Control name="ThuongHieu" style={{ fontSize: '12px' }} as="select">
																	<p>asd</p>
																</Form.Control>
															</Form.Group>
														</Form>
													</Col>
												</Row>

												{/*Child Row 3*/}
												<Row style={{ marginTop: '2rem' }}>
													<Col md={4}>
														<p style={{ fontSize: '12px' }}>Giới thiệu</p>
													</Col>
													<Col md={8}>
														<Form>
															<Form.Control style={{ width: '15rem', fontSize: '12px' }} name="TenSP" as="textarea" />
														</Form>
													</Col>
												</Row>
												{/*Child Row 4*/}
												<Row  style={{ marginTop: '1rem',display:'flex',paddingLeft:'39%'}}>	
													<a href="/admin">
														<Button style={{backgroundColor:'#3ac9c9',width:'7rem'}}>Hủy</Button>
													</a>
													<Button style={{backgroundColor:'#3ac9c9',width:'7rem',marginLeft:'1rem'}}>Xác nhận</Button>
												</Row>
											</div>
											</div>
				</Container>
		)
}
export default THAddThuongHieu;