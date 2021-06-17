import React from 'react';
import SearchBox from '../../components/User/SearchBox'
import { Row, Container, Table,Form,Button } from 'react-bootstrap';
import { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
class DHTatCaDonHang extends Component {

	constructor(props) {
		super(props);
		this.state = {
			orders: []
		}
	}

	componentDidMount() {
		axios({
			method: 'GET',
			url: 'http://localhost:5000/api/orders',
			data: null
		}).then(res => {
			console.log(res);
			this.setState({
				orders: res.data
			});
		}).catch(err => {
			console.log(err);
		})
	}

	showOrders(orders) {
		var result = null;
		if (orders.length > 0) {
			result = orders.map((order, index) => {
				return (
					<tr>
						<td className="id">
							<p>{order._id}</p>
						</td>

						<td className="user">
							<p>{order.User.HoTen}</p>
						</td>

						<td className="ngayban">
							<p>{order.NgayBan}</p>
						</td>

						<td className="trangthai">
							<Form.Group controlId="exampleForm.ControlSelect1">
								<Form.Control as="select">
									<option>Chờ xác nhận</option>
									<option>Chờ lấy hàng</option>
									<option>Đang giao</option>
									<option>Đã giao</option>
									<option>Đơn hủy</option>
									<option>Trà hàng/Hoàn tiền</option>
								</Form.Control>
							</Form.Group>
						</td>

						
						<td className="thaotac">
							<Link to={"/admin-order-details/"+order._id}>Xem chi tiết</Link>
						</td>

					</tr>
				)
			});
		}
		return result;
	}

	render() {
		var { orders } = this.state
		return (
			<Container style={{ marginTop: '2rem' }}>

				<Row style={{display:'flex',justifyContent:'space-between'}}>
					<SearchBox />
					<Button style={{backgroundColor:'#3ac9c9'}}>Cập nhật</Button>
				</Row>

				<Row>

					<Table striped bordered hover style={{ marginTop: '1rem' }}>
						<thead>
							<tr>
								<th>ID</th>
								<th>User</th>
								<th>Ngày Mua</th>
								<th>Trạng thái</th>
								<th>Xem chi tiết đơn hàng</th>
							</tr>
						</thead>
						<tbody>
							{this.showOrders(orders)}
						</tbody>
					</Table>
				</Row>

			</Container>
		)
	}
}
export default DHTatCaDonHang;