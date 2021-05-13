import React from 'react';
import SliderCommercial from '../components/SliderCommercial';
import SliderCompanyLogo from '../components/SliderCompanyLogo'
import SliderProduct from '../components/SliderProduct';
import NavigationBar from '../components/NavigationBar';
import {Button,Container} from 'react-bootstrap';

const TrangChu = () => {
  return(
  	<div style={{display:'flex',flexDirection:'column'}}>
	  	<div className="header">
	  	  	<NavigationBar/>
	  	</div>

	  	<div className="body">
	  		<Container sttle={{display:'flex',flexDirection:'column'}}>
				<SliderCommercial/>
				<div>
					<h4>Máy tính xách tay</h4>
					<SliderCompanyLogo/>
					<SliderProduct/>
					<a href="/xemtatca">
						<button type="submit" class="btn btn-primary" style={{marginLeft:"43%",marginTop:'3%'}}>Xem tất cả</button>
					</a>
				</div>
			</Container>
		</div>

		<div className="footer">

		</div>
	</div>
	)
  }
export default TrangChu;