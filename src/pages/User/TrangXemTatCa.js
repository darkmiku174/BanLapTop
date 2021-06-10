import React from "react";
import { Pagination } from '@material-ui/lab';
import { Breadcrumbs } from '@material-ui/core';
import { Container, Form, Row, Col } from 'react-bootstrap';
import SliderProduct from "../../components/User/SliderProduct";
import axios from "axios"
import { Component } from "react";

class TrangXemTatCa extends Component {

	constructor(props) {
		super(props);
		this.state = {
			trademarks: [],
			checkLogo: [],
			money: ["Trên 50 triệu", "40 - 50 triệu", "30 - 40 triệu", "20 - 30 triệu", "15 - 20 triệu", "10 - 15 triệu", "dưới 10 triệu"]
		}
	}

	componentWillMount() {
		axios({
			method: 'GET',
			url: 'http://localhost:5000/api/trademarks',
			data: null
		}).then(res => {
			console.log(res);
			this.setState({
				trademarks: res.data
			});
		}).catch(err => {
			console.log(err);
		})
	}

	showMoney(money) {
		var result = null;
		if (money.length > 0) {
			result = money.map((m, index) => {
				return (
					<Form.Check inline label={m} name="group1" />
				)
			});
		}
		return result;
	}

	showTrademarks(trademarks, check) {
		var result = null;
		if (trademarks.length > 0) {
			result = trademarks.map((trademark, index) => {
				check.push(false);
				return <Form.Check inline label={trademark.TenTH} key={index} index={index} name="group1" />
			});
		}
		return result;
	}


	render() {
		var { trademarks, money, checkLogo } = this.state
		console.log(checkLogo)
		return (
			<>
				<Container>

					<Row>
						<h5>Laptop</h5>
					</Row>
					<Row>

						<Col md={2} style={{ border: '1px solid white' }}>
							<Row style={{ marginBottom: '1rem', color: 'white' }}>
								.
						</Row>
							<Row style={{
								justifyContent: 'space-between',
								border: '1px solid #d4d4d4',
								padding: '0.5rem'
							}}>
								<p style={{ fontWeight: 'bold', fontSize: '14px' }}>Bộ lọc</p>
								<a href="#" style={{ fontSize: '13px' }}>bỏ lọc</a>
							</Row>
							<Row style={{
								justifyContent: 'space-between',
								border: '1px solid #d4d4d4',
								padding: '0.5rem',
								fontSize: '13px'
							}}>
								<Form style={{ display: 'flex', flexDirection: 'column' }}>
									<p style={{ fontWeight: 'bold', fontSize: '14px' }}>Thương hiệu</p>
									{this.showTrademarks(trademarks, checkLogo)}
								</Form>
							</Row>
							<Row style={{
								justifyContent: 'space-between',
								border: '1px solid #d4d4d4',
								padding: '0.5rem',
								fontSize: '13px'
							}}>
								<Form style={{ display: 'flex', flexDirection: 'column' }}>
									<p style={{ fontWeight: 'bold', fontSize: '14px' }}>Khoảng giá</p>
									{this.showMoney(money)}

								</Form>
							</Row>
						</Col>
						<Col md={10}>
							<Container>
								<Row style={{ display: 'flex' }}>
									<p style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Sắp xếp theo :</p>
									<a style={{ marginLeft: '1rem' }} href="#">Giá tăng dần </a>
									<a style={{ marginLeft: '1rem' }} href="#">Giá giảm dần </a>
								</Row>
								<Row>
									<SliderProduct check={1} />
									<Pagination count={10} style={{ marginLeft: '18%', marginTop: '5%' }} />
								</Row>

							</Container>
						</Col>
					</Row>
				</Container>
			</>
		);
	}
}
export default TrangXemTatCa;