import React from 'react'
import ProductItem from './ProductItem'
import { Row, Container } from 'react-bootstrap'
import { Component } from 'react'
import axios from 'axios'
class SliderProduct extends Component {

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

	

	render() {
		var { products } = this.state;
		var { check } = this.props
		return (
			<Container style={{ marginLeft: '5%' }}>
				<Row>
					{this.showProducts(products, check)}
				</Row>
			</Container>
		)

	}

	showProducts(products, check) {
		var result = null;
		if (products.length > 0) {
			result = products.map((product, index) => {
				if (check != "1" && index>=10)
					return null
				return <ProductItem product={product} key={index} index={index} />
			});
		}
		return result;
	}
};

export default SliderProduct;