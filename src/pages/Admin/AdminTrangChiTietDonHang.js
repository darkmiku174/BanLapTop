import React from 'react';
import {Container,Row,Col,Form,Table} from 'react-bootstrap';

const AdminTrangChiTietDonHang = () => {
	return (
		<Container className="order-details-container" style={{textAlign:'left'}}>
			<h5>Chi tiết đơn hàng</h5>
			<Row style={{border:'2px solid #3ac9c9',marginTop:'1rem',borderRadius:'1rem'}} fluid>
				{/*parent Col 1*/}
				<Col md={6} style={{padding:'1rem'}}>
					{/*Row 1*/}
					<Row style={{marginTop:'1rem'}}>
						<Col md={4}>
							<p style={{fontWeight:'bold'}}>Tên người mua:</p>
						</Col>
						<Col md={8}>
							<p>Nguyễn văn a</p>
						</Col>
					</Row>
					{/*Row 2*/}
					<Row style={{marginTop:'1rem'}}>
						<Col md={4}>
							<p style={{fontWeight:'bold'}}>Địa chỉ:</p>
						</Col>
						<Col md={8}>
							<p>11/3 ấp 2, Xuân thới tứ,Hóc môn, TP.Hồ chí minh</p>
						</Col>
					</Row>
					{/*Row 3*/}
					<Row style={{marginTop:'1rem'}}>
						<Col md={4}>
							<p style={{fontWeight:'bold'}}>Ngày mua:</p>
						</Col>
						<Col md={4}>
							<p>26-6-2021</p>
						</Col>
					</Row>
				</Col>

				{/*parent Col 2*/}
				<Col md={6} style={{padding:'1rem'}}>
					<div className="order-details-table">
						<Table striped bordered style={{ width: '30rem',border:'2px solid #3ac9c9' }}>
							<thead>
								<tr style={{textAlign:'center'}}>
									<th>STT</th>
									<th>Tên sản phẩm</th>
									<th>Số lượng</th>
									<th>Đơn giá</th>

								</tr>
							</thead>
							<tbody>

								<tr className="tr-edit">
									<td>1</td>
									<td>Tên sản phẩm</td>
									<td>1</td>
									<td>30.000.00</td>
								</tr>	
								<tr className="tr-edit">
									<td>1</td>
									<td>Tên sản phẩm</td>
									<td>1</td>
									<td>30.000.00</td>
								</tr>
								
							</tbody>
						</Table>
					</div>
				</Col>
			</Row>
		</Container>
		)
}
export default AdminTrangChiTietDonHang;