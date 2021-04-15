import React from 'react'
import SlideritemsCard from '../components/SlideritemsCard'
import {Carousel,Row,Col} from 'react-bootstrap'
const Slideritems =() => {
	return(		
		<Carousel style={{marginLeft:'4rem',marginTop:'2rem',display:'flex'}}>
		  <Carousel.Item interval={5000}>
		    <Row>
		    	<SlideritemsCard/>
		    	<SlideritemsCard/>
		    	<SlideritemsCard/>
		    	<SlideritemsCard/>
		    	<SlideritemsCard/>
		    	<SlideritemsCard/>
		    	<SlideritemsCard/>
		    	<SlideritemsCard/>
		    	<SlideritemsCard/>
		    	<SlideritemsCard/>
		    </Row>
		  </Carousel.Item>
		  <Carousel.Item interval={5000}>
		     <Row>
		    	<SlideritemsCard/>
		    	<SlideritemsCard/>
		    	<SlideritemsCard/>
		    	<SlideritemsCard/>
		    	<SlideritemsCard/>
		    	<SlideritemsCard/>
		    	<SlideritemsCard/>
		    	<SlideritemsCard/>
		    	<SlideritemsCard/>
		    	<SlideritemsCard/>
		    </Row>
		  </Carousel.Item>
		</Carousel>
		)
}
export default Slideritems;