import React from 'react';
import { Col, Row, Container, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { Component } from 'react';
class TrangDatHang extends Component {

	constructor(props) {
		super(props);
		this.state = {
			user: JSON.parse(localStorage.getItem("USER")) ? JSON.parse(localStorage.getItem("USER")) : []
		}
	}

	showProducts(cart) {
		var result = null;
		if (cart.length > 0) {
			result = cart.map((product, index) => {
				return (
					<Row style={{ border: '0.01rem solid black', padding: '1rem' }}>
						<Col sm={7}>{product.product.TenSP}</Col>
						<Col sm={5} style={{ fontWeight: 'bold' }}>{this.moneyProduct(product.quantity, product.product.DonGia)}</Col>
					</Row>
				)
			});
		}
		return result;
	};

	moneyProduct = (quantity, money) => {
		return parseInt(quantity) * parseInt(money)
	}

	showTotalAmount = (cart) => {
		var total = 0;
		if (cart.length > 0) {
			for (var i = 0; i < cart.length; i++) {
				total += cart[i].product.DonGia * cart[i].quantity;
			}
		}
		return total;
	}

	render() {
		var { cart } = this.props;
		var { user } = this.state;
		var address = user.Address.split(',')
		console.log(cart.length);
		return (
			<div>
				<Container style={{ marginTop: '2rem' }}>
					<h5 style={{ marginBottom: '1rem' }}>Đặt hàng</h5>
					<Row>
						<Col sm={8} style={{ border: '1px solid black', padding: '3rem' }}>
							<Row>
								<h6>Thông tin người nhận</h6>
							</Row>
							<Row style={{ marginTop: '1rem' }}>
								<Col>
									<Form.Control placeholder="name" value={user.HoTen} />
								</Col>
							</Row>

							<Row style={{ marginTop: '1rem' }}>
								<h6>Địa chỉ</h6>
							</Row>
							<Row style={{ marginTop: '1rem' }}>
								<Col>
									<Form.Control placeholder="Tỉnh/Thành Phố" value={address[3]}/>
								</Col>
								<Col>
									<Form.Control placeholder="Quận huyện" value={address[2]}/>
								</Col>
								<Col>
									<Form.Control placeholder="Phường/Xã" value={address[1]} />
								</Col>
							</Row>

							<Row style={{ marginTop: '1rem' }}>
								<Col>
									<Form.Control placeholder="Số nhà, tên đường, phường xã" value={address[0]} />
								</Col>
							</Row>

						</Col>
						<Col sm={4} style={{ flexDirection: 'column' }}>
							<Row style={{ border: '0.01rem solid black', padding: '0.5rem' }}>
								<Col sm={7}>Đơn hàng x{cart.length}</Col>
								<Col sm={5}><Link to="/cart">Sửa </Link></Col>
							</Row>
							{this.showProducts(cart)}
							<Row style={{ border: '0.01rem solid black', padding: '0.5rem' }}>
								<Col sm={7}>Thành tiền</Col>
								<Col sm={5} style={{ fontWeight: 'bold' }}>{this.showTotalAmount(cart)}</Col>
							</Row>
						</Col>
					</Row>
					<Link to="/ordersuccess">
						<Button style={{ marginTop: '2rem' }}>Hoàn tất đặt hàng</Button>
					</Link>
				</Container>
			</div>
		)
	}
}
const mapStateToProps = state => {
	return {
		cart: state.cart
	}
}

export default connect(mapStateToProps, null)(TrangDatHang);