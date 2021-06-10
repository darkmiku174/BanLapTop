import React from 'react';
import { Component } from 'react';
import { Container } from 'react-bootstrap'
import { FaCheck } from 'react-icons/fa';
import { connect } from 'react-redux';
class TrangDatHangThanhCong extends Component {

	constructor(props) {
		super(props);
		this.state = {
			user: JSON.parse(localStorage.getItem("USER")) ? JSON.parse(localStorage.getItem("USER")) : []
		}
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
		var { user } = this.state;
		var { cart } = this.props;
		return (
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<Container style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', paddingBottom: '1rem', paddingTop: '5rem' }}>
					<p style={{ fontSize: '20px' }}>Đã đặt hàng thành công</p>
					<div style={{
						borderRadius: '50rem',
						height: '4rem', width: '4rem',
						backgroundColor: '#ebf5f7',
						zIndex: '1', marginLeft: '46%',
						paddingTop: '1.2rem', marginTop: '1rem',
						marginBottom: '1rem'
					}}>
						<FaCheck style={{ marginLeft: '1.4rem', fontSize: '1.5rem', color: '#06c1d4' }} />
					</div>
					<p>Cảm ơn khách hàng đã đặt hàng. Trong vòng 24h nhân viên sẽ gọi điện xác nhận đặt hàng cho anh chị</p>
				</Container>
				<Container style={{ paddingTop: '0rem', display: 'flex', flexDirection: 'column', marginLeft: '9.9rem', paddingLeft: '5rem' }}>
					<h6>Thông tin đặt hàng</h6>
					<div className="details-receiver" style={{ display: 'flex' }}>
						<p>Người nhận:</p>
						<p style={{ marginLeft: '0.5rem', fontWeight: 'bold' }}>{user.HoTen}</p>
					</div>
					<div className="details-receiver" style={{ display: 'flex' }}>
						<p>Nhận hàng tại:</p>
						<p style={{ marginLeft: '0.5rem', fontWeight: 'bold' }}>{user.Address}</p>
					</div>
					<div className="details-receiver" style={{ display: 'flex' }}>
						<p>Tổng tiền thanh toán:</p>
						<p style={{ marginLeft: '0.5rem', fontWeight: 'bold' }}>{this.showTotalAmount(cart)}</p>
					</div>
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
export default connect(mapStateToProps, null)(TrangDatHangThanhCong);