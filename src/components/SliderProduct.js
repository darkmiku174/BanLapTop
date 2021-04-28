import React from 'react'
import ProductItems from '../components/ProductItems'
import {Carousel,Row,Col} from 'react-bootstrap'
const SliderProduct =() => {
	return(	
		<Carousel style={{marginLeft:'4rem',marginTop:'2rem',display:'flex'}}>
		  <Carousel.Item interval={10000}>
		    <Row>
		    	<a href=""><ProductItems/></a>
		    	<a href=""><ProductItems/></a>
		    	<a href=""><ProductItems/></a>
		    	<a href=""><ProductItems/></a>
		    	<a href=""><ProductItems/></a>
		    	<a href=""><ProductItems/></a>
		    	<a href=""><ProductItems/></a>
		    	<a href=""><ProductItems/></a>
		    	<a href=""><ProductItems/></a>
		    	<a href=""><ProductItems/></a>
		    </Row>
		  </Carousel.Item>
		  <Carousel.Item interval={10000}>
		     <Row>
		    	<ProductItems/>
		    	<ProductItems/>
		    	<ProductItems/>
		    	<ProductItems/>
		    	<ProductItems/>
		    	<ProductItems/>
		    	<ProductItems/>
		    	<ProductItems/>
		    	<ProductItems/>
		    	<ProductItems/>
		    </Row>
		  </Carousel.Item>
		</Carousel>
		)
}
export default SliderProduct;