import React from 'react';
import SliderCommercial from '../components/SliderCommercial';
import SliderCompanyLogo from '../components/SliderCompanyLogo'
import SliderProduct from '../components/SliderProduct';
import NavigationBar from '../components/NavigationBar';
import {Button } from 'react-bootstrap';

const TrangChu = () => {
  return(
  	<div>
		<SliderCommercial/>
		<div style={{margin:'auto',marginBottom:'3rem'}}>
			<div className="container-flex" style={{marginTop:"2rem"}}>
				<h4>Máy tính xách tay</h4>
					<div style={{display:'flex',marginTop:"2rem",marginRight:"1rem"}}>
						<h6 className="text-middle">Thương hiệu: </h6>
						<SliderCompanyLogo/>
					</div>
					<SliderProduct/>
			</div>
			 <button type="submit" class="btn btn-primary" style={{marginLeft:"43%",marginTop:'2rem'}}>Xem tất cả</button>
		</div>
	</div>
	)
  }
export default TrangChu;