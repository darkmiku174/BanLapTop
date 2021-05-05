import React from 'react'
import ProductItems from '../components/ProductItems'
import {Carousel,Row,Col,Container} from 'react-bootstrap'
const SliderProduct =() => {
	return(
		<Container>
		<Carousel
		style={{
			marginLeft:'4rem',
			marginTop:'2rem',
			display:'flex',
			}}>
		  <Carousel.Item interval={10000}>
		    <Row>
		    	<a href="/chitietsanpham"><ProductItems/></a>
		    	<a href="/chitietsanpham"><ProductItems/></a>
		    	<a href="/chitietsanpham"><ProductItems/></a>
		    	<a href="/chitietsanpham"><ProductItems/></a>
		    	<a href="/chitietsanpham"><ProductItems/></a>
		    	<a href="/chitietsanpham"><ProductItems/></a>
		    	<a href="/chitietsanpham"><ProductItems/></a>
		    	<a href="/chitietsanpham"><ProductItems/></a>
		    	<a href="/chitietsanpham"><ProductItems/></a>
		    	<a href="/chitietsanpham"><ProductItems/></a>
		    </Row>
		  </Carousel.Item>
		  <Carousel.Item interval={10000}>
		     <Row>
		    	<a href="/chitietsanpham"><ProductItems/></a>
		    	<a href="/chitietsanpham"><ProductItems/></a>
		    	<a href="/chitietsanpham"><ProductItems/></a>
		    	<a href="/chitietsanpham"><ProductItems/></a>
		    	<a href="/chitietsanpham"><ProductItems/></a>
		    	<a href="/chitietsanpham"><ProductItems/></a>
		    	<a href="/chitietsanpham"><ProductItems/></a>
		    	<a href="/chitietsanpham"><ProductItems/></a>
		    	<a href="/chitietsanpham"><ProductItems/></a>
		    	<a href="/chitietsanpham"><ProductItems/></a>
		    </Row>
		  </Carousel.Item>
		</Carousel>
		</Container>
		)
}
export default SliderProduct;