import React from 'react'
import CompanyLogo from '../components/CompanyLogo'
import {Carousel,Row,Col} from 'react-bootstrap'
const SliderCompanyLogo =() => {
	return(		
		<div className="swiper-discount" style={{height:"4rem"}}>
		 	<Row style={{marginLeft:'2rem',marginBottom:'6rem'}}>
				<CompanyLogo/>
		    	<CompanyLogo/>
		    	<CompanyLogo/>
		    	<CompanyLogo/>
		    	<CompanyLogo/>
		    	<CompanyLogo/>
		    	<CompanyLogo/>
		    	<CompanyLogo/>
		    </Row>	 
		</div>
		)
}
export default SliderCompanyLogo;