import React from 'react'
import SliderCompanyLogo from '../components/SliderCompanyLogo'
import {Carousel,Row,Col} from 'react-bootstrap'
const LogoCompanyitems =() => {
	return(		
		<div className="swiper-discount" style={{height:"4rem"}}>
		 	<Row style={{marginLeft:'2rem',marginBottom:'6rem'}}>
				<SliderCompanyLogo/>
		    	<SliderCompanyLogo/>
		    	<SliderCompanyLogo/>
		    	<SliderCompanyLogo/>
		    	<SliderCompanyLogo/>
		    	<SliderCompanyLogo/>
		    	<SliderCompanyLogo/>
		    	<SliderCompanyLogo/>
		    </Row>

		 
		</div>
		)
}
export default LogoCompanyitems;