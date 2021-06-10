import React from 'react';
import { Breadcrumbs } from '@material-ui/core';
import { Container, Row, Col, Button, Form, InputGroup, Table } from 'react-bootstrap';
const SPEditSanPham = () => {

	return (
		<>
			<Container>
				<div style={{ backgroundColor: '#3ac9c9', paddingLeft: '2rem', paddingBottom: '1rem' }}>
					<p style={{ color: 'white', fontSize: '23px' }}>Đơn hàng</p>
					<Breadcrumbs aria-label="breadcrumb" style={{ color: 'white' }}>
						<a color="inherit" href="/admin" >
							TLT
					</a>
						<a color="inherit" href="/admin/donhang">
							donhang
					</a>
					</Breadcrumbs>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<Container style={{ backgroundColor: '#f7f7f7' }}>
						{/*Parent Row 1*/}
						<Row style={{ margin: '0.2rem', marginTop: '1rem', marginBottom: '1rem', backgroundColor: 'white', padding: '1rem' }}>
							<h5>Thông tin chung</h5>
							<Container style={{ marginTop: '3rem' }}>
								<Col>
									<div className="parent-row-1-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
										<div className="child-row-container">
											{/*Child Row 1*/}
											<Row style={{ marginTop: '2rem' }}>
												<Col md={4}>
													<p style={{ marginTop: '20%', fontSize: '12px' }}>Hình ảnh sản phẩm</p>
												</Col>
												<Col md={8}>
													<div className="img-container">
														<form>
															<img src="#" style={{ width: '15rem', height: '15rem' }} />
															<input type="file" />
														</form>
													</div>
												</Col>
											</Row>
											{/*Child Row 2*/}
											<Row style={{ marginTop: '2rem' }}>
												<Col md={4}>
													<p style={{ fontSize: '12px' }}>Tên sản phẩm</p>
												</Col>
												<Col md={8}>
													<Form>
														<Form.Control style={{ width: '15rem', fontSize: '12px' }} type="text" />
													</Form>
												</Col>
											</Row>

											{/*Child Row 3*/}
											<Row style={{ marginTop: '2rem' }}>
												<Col md={4}>
													<p style={{ fontSize: '12px' }}>Thương hiệu</p>
												</Col>
												<Col md={8}>
													<Form>
														<Form.Group controlId="exampleForm.ControlSelect1">
															<Form.Control style={{ fontSize: '12px' }} as="select">
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
											<Table striped bordered style={{ width: '30rem' }}>
												<thead>
													<tr>
														<th></th>
														<th></th>
														<th></th>

													</tr>
												</thead>
												<tbody>

													<tr className="tr-edit">
														<td style={{ padding: '5px' }}>1</td>
														<td style={{ padding: '5px' }}>Vi xử lý</td>
														<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%' }} size="sm" type="text" placeholder="Nhập vào" /></td>
													</tr>
													<tr className="tr-edit">
														<td style={{ padding: '5px' }}>2</td>
														<td style={{ padding: '5px' }}>Màn hình</td>
														<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%' }} size="sm" type="text" placeholder="Nhập vào" /></td>
													</tr>
													<tr className="tr-edit">
														<td style={{ padding: '5px' }}>3</td>
														<td style={{ padding: '5px' }}>Độ phủ màu</td>
														<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%' }} size="sm" type="text" placeholder="Nhập vào" /></td>
													</tr>
													<tr className="tr-edit">
														<td style={{ padding: '5px' }}>4</td>
														<td style={{ padding: '5px' }}>RAM</td>
														<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%' }} size="sm" type="text" placeholder="Nhập vào" /></td>
													</tr>
													<tr className="tr-edit">
														<td style={{ padding: '5px' }}>5</td>
														<td style={{ padding: '5px' }}>Card đồ họa</td>
														<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%' }} size="sm" type="text" placeholder="Nhập vào" /></td>
													</tr>
													<tr className="tr-edit">
														<td style={{ padding: '5px' }}>6</td>
														<td style={{ padding: '5px' }}>Lưu trữ</td>
														<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%' }} size="sm" type="text" placeholder="Nhập vào" /></td>
													</tr>
													<tr className="tr-edit">
														<td style={{ padding: '5px' }}>7</td>
														<td style={{ padding: '5px' }}>Pin</td>
														<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%' }} size="sm" type="text" placeholder="Nhập vào" /></td>
													</tr>
													<tr className="tr-edit">
														<td style={{ padding: '5px' }}>8</td>
														<td style={{ padding: '5px' }}>Cổng kết nối</td>
														<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%' }} size="sm" type="text" placeholder="Nhập vào" /></td>
													</tr>
													<tr className="tr-edit">
														<td style={{ padding: '5px' }}>9</td>
														<td style={{ padding: '5px' }}>Cân nặng</td>
														<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%' }} size="sm" type="text" placeholder="Nhập vào" /></td>
													</tr>
													<tr className="tr-edit">
														<td style={{ padding: '5px' }}>10</td>
														<td style={{ padding: '5px' }}>Hệ điều hành</td>
														<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%' }} size="sm" type="text" placeholder="Nhập vào" /></td>
													</tr>
													<tr className="tr-edit">
														<td style={{ padding: '5px' }}>11</td>
														<td style={{ padding: '5px' }}>Màu sắc</td>
														<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%' }} size="sm" type="text" placeholder="Nhập vào" /></td>
													</tr>

												</tbody>
											</Table>
										</div>
									</div>
								</Col>
							</Container>

						</Row>

						{/*Parent Row 2*/}
						<Row style={{ margin: '0.2rem', marginTop: '1rem', marginBottom: '1rem', backgroundColor: 'white', padding: '1rem' }}>
							<h5>Thông tin bán hàng</h5>
							<Container style={{ marginTop: '3rem' }}>
								{/*Child Row 1*/}
								<Row style={{ marginTop: '2rem' }}>
									<Col md={2}>
										<p style={{ fontSize: '12px' }}>Giá</p>
									</Col>
									<Col md={4}>
										<Form>
											<InputGroup className="mb-2">
												<InputGroup.Prepend>
													<InputGroup.Text style={{ fontSize: '12px' }}>₫</InputGroup.Text>
												</InputGroup.Prepend>
												<Form.Control style={{ width: '15rem', fontSize: '12px' }} type="text" />
											</InputGroup>
										</Form>
									</Col>
								</Row>
								{/*Child Row 2*/}
								<Row style={{ marginTop: '2rem' }}>
									<Col md={2}>
										<p style={{ fontSize: '12px' }}>Kho hàng</p>
									</Col>
									<Col md={4}>
										<Form>
											<Form.Control style={{ fontSize: '12px' }} type="text" />
										</Form>
									</Col>
								</Row>

							</Container>
						</Row>

						{/*Parent Row 3*/}
						<Row style={{ margin: '0.2rem', marginTop: '1rem', marginBottom: '1rem', backgroundColor: 'white', padding: '1rem' }}>
							<h5>Thông tin bán hàng</h5>
							<Container style={{ marginTop: '3rem' }}>

								{/*Child Row 1*/}
								<Row style={{ marginTop: '2rem' }}>
									<Col md={2}>
										<p style={{ fontSize: '12px' }}>SKU</p>
									</Col>
									<Col md={4}>
										<Form>
											<Form.Control style={{ fontSize: '12px' }} type="text" />
										</Form>
									</Col>
								</Row>

								{/*Child Row 2*/}
								<Row style={{ marginTop: '2rem' }}>
									<Col md={2}>
										<p style={{ fontSize: '12px' }}>Tình trạng</p>
									</Col>
									<Col md={4}>
										<Form>
											<Form.Group controlId="exampleForm.ControlSelect1">
												<Form.Control style={{ fontSize: '12px' }} as="select">
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

					<Container style={{ margin: '3rem' }}>
						<a href="/admin">
							<Button style={{
								position: 'relative',
								float: 'right',
								marginRight: '8rem',
								width: '7rem',
								backgroundColor: 'white',
								color: 'black',
								fontSize: '12px'
							}}>Hủy</Button>
						</a>
						<Button style={{
							position: 'relative',
							float: 'right',
							marginRight: '4rem',
							width: '7rem',
							fontSize: '12px'
						}}>Cập nhật</Button>
					</Container>
				</div>
			</Container>
		</>
	)
}
export default SPEditSanPham;
