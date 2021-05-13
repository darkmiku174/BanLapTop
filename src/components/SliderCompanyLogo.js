import React from 'react'
import CompanyLogo from '../components/CompanyLogo'
import {Carousel,Row,Col} from 'react-bootstrap'
const SliderCompanyLogo =() => {
	return(	
		<div style={{display:'flex',marginTop:'2rem'}}>
			<h6 style={{padding:'20px 0'}}>thương hiệu :</h6>
		 	<Row style={{marginLeft:'2rem',marginBottom:'1rem'}}>
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