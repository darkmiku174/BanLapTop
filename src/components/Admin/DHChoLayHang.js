import React from 'react';
import SearchBox from '../../components/User/SearchBox'
import { Row, Col, Container, Table } from 'react-bootstrap';
const DHChoLayHang = () => {
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
									<p>Đã giao</p>
								</td>

								<td className="user">
									<p>Nguyễn văn A</p>
								</td>

								<td className="thaotac">
									<a href="#chitiet">Xem chi tiết</a>
								</td>

							</tr>
						</tbody>
					</Table>
				</Row>

			</Container>
	)
}
export default DHChoLayHang;