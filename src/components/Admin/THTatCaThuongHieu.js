import React from 'react';
import SearchBox from '../../components/User/SearchBox'
import { Row, Container, Table, Button } from 'react-bootstrap';
import axios from 'axios'
import { Component } from 'react';
class THTatCaThuongHieu extends Component {

	constructor(props) {
		super(props);
		this.state = {
			trademarks: []
		}
	}

	componentDidMount() {
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

	showTrademarks(trademarks) {
		var result = null;
		if (trademarks.length > 0) {
			result = trademarks.map((trademark, index) => {
				return (
					<tr>
						<td>
							Lenovo
								</td>

						<td>
							<img src={trademark.Logo}
								style={{ width: '5rem', height: '3rem', backgroundColor: 'white' }} />
						</td>

						<td>
							<p>{trademark.MoTa}</p>
						</td>

						<td>
							<Button style={{ backgroundColor: 'white', color: 'black', fontSize: '12px', border: '1px solid black' }}>Edit</Button>
						</td>

					</tr>
				)
			});
		}
		return result;
	}

	render() {
		var {trademarks} =this.state
		return (
			<Container>

				<Row>
					<SearchBox />
				</Row>

				<Row>

					<Table striped bordered hover style={{ marginTop: '1rem' }}>
						<thead>
							<tr>
								<th>Tên thương hiệu</th>
								<th>Logo</th>
								<th>Giới thiệu</th>
								<th>Chỉnh sửa</th>
							</tr>
						</thead>
						<tbody>
							{this.showTrademarks(trademarks)}
						</tbody>
					</Table>
				</Row>

			</Container>
		)
	}
}
export default THTatCaThuongHieu;