import React from 'react';
import SearchBox from '../../components/User/SearchBox'
import { Row, Col, Container, Table,Form } from 'react-bootstrap';
const DHChoXacNhan = () => {
	return (
		<Container style={{ marginTop: '2rem' }}>

				<Row>
					<SearchBox />
				</Row>

				<Row>

					<Table striped bordered hover style={{ marginTop: '1rem' }}>
						<thead>
							<tr>
								<th>ID</th>
								<th>Tổng đơn</th>
								<th>Trạng thái</th>
								<th>User</th>
								<th>Thao tác</th>
							</tr>
						</thead>
						<tbody>
							<tr>

								<td className="id">
									<p>DH001</p>
								</td>

								<td className="tongdon">
									<p>21.000.000 đ</p>
								</td>

								<td className="trangthai">
									<Form.Group controlId="exampleForm.ControlSelect1">
									    <Form.Control as="select">
									      <option>Đã giao</option>
									      <option>Chưa giao</option>
									    </Form.Control>
									</Form.Group>
								</td>

								<td className="user">
									<p>Nguyễn văn A</p>
								</td>

								<td className="thaotac">
									<a href="/admin-order-details">Xem chi tiết</a>
								</td>

							</tr>
						</tbody>
					</Table>
				</Row>

			</Container>
	)
}
export default DHChoXacNhan;