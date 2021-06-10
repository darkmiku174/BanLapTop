import React from 'react';
import { Component } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import axios from 'axios';
import { actAddToCart } from '../../actions/index';
import { connect } from 'react-redux';
class TrangXemChiTietSanPham extends Component {

	constructor(props) {
		super(props);
		this.state = {
			product :{},
		}
	}

	componentDidMount() {
		axios({
			method: 'GET',
			url: 'http://localhost:5000/api/products/' +this.props.match.params.id,
			data: null
		}).then(res => {
			console.log(res);
			this.setState({
				product: res.data
			});
		}).catch(err => {
			console.log(err);
		})
	}

	onAddToCart = (product) =>{
		this.props.onAddToCart(product);
	}

	render() {
		var {product}=this.state;
		return (
			<div>
				<Container style={{ margin: 'auto', padding: '2rem', marginTop: '2rem' }}>
					<Row>
						<Col sm={6}>
							<Container>
								<img src={product.HinhAnh} alt={product.TenSP}
									width="100%"
									height="70%"
								/>
							</Container>
							<Button style={{ marginTop: '0.7rem', marginLeft: '10rem' }} onClick={()=> this.onAddToCart(product)}>Thêm vào giỏ hàng</Button>
						</Col>
						<Col sm={6}>
							<h3>{product.TenSP}</h3>
							<div style={{ display: 'flex' }}><p style={{ fontWeight: 'bold' }}>Vi xử lí:  </p> <p>{product.CPU}</p></div>
							<div style={{ display: 'flex' }}><p style={{ fontWeight: 'bold' }}>Màn hình:  </p> <p>{product.ManHinh}</p></div>
							<div style={{ display: 'flex' }}><p style={{ fontWeight: 'bold' }}>Độ phủ màu:  </p> <p>{product.DoPhuMau}</p></div>
							<div style={{ display: 'flex' }}><p style={{ fontWeight: 'bold' }}>RAM:  </p> <p>{product.RAM}</p></div>
							<div style={{ display: 'flex' }}><p style={{ fontWeight: 'bold' }}>Card đồ họa:  </p> <p>{product.VGA}</p></div>
							<div style={{ display: 'flex' }}><p style={{ fontWeight: 'bold' }}>Lưu trữ:  </p> <p>{product.BoNhoLuuTru}</p></div>
							<div style={{ display: 'flex' }}><p style={{ fontWeight: 'bold' }}>Pin:  </p> <p>{product.Pin}</p></div>
							<div style={{ display: 'flex' }}><p style={{ fontWeight: 'bold' }}>Cổng kết nối:  </p> <p> {product.CongKetNoi}</p></div>
							<div style={{ display: 'flex' }}><p style={{ fontWeight: 'bold' }}>Cận nặng:  </p> <p>{product.CanNang}</p></div>
							<div style={{ display: 'flex' }}><p style={{ fontWeight: 'bold' }}>Hệ điều hành:  </p> <p>{product.HeDieuHanh}</p></div>
							<div style={{ display: 'flex' }}><p style={{ fontWeight: 'bold' }}>Màu sắc: </p> <p> {product.MauSac}</p></div>
						</Col>
					</Row>
				</Container>
			</div>
		)
	}
}

const mapStateToProps = state => {
    return {
        products : state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrangXemChiTietSanPham);