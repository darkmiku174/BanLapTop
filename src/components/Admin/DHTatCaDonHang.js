import React from 'react';
import SearchBox from '../../components/User/SearchBox'
import { Row, Col, Container, Table } from 'react-bootstrap';
import { Component } from 'react';
import axios from 'axios'
class DHTatCaDonHang extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			products: []
		}
	}

	componentDidMount() {
		axios({
			method: 'GET',
			url: 'http://localhost:5000/api/products',
			data: null
		}).then(res => {
			console.log(res);
			this.setState({
				products: res.data
			});
		}).catch(err => {
			console.log(err);
		})
	}

	showProducts(products, check) {
		var result = null;
		if (products.length > 0) {
			result = products.map((product, index) => {
				if (check != "1" && index>=10)
					return null
				return null
			});
		}
		return result;
	}
	
	render() {
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
}
export default DHTatCaDonHang;