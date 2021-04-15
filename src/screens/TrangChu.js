import React from 'react';
import Slider from '../components/Slider';
import LogoCompanyitems from '../components/LogoCompanyitems'
import Slideritems from '../components/Slideritems';
import NavigationBar from '../components/NavigationBar';
import {Button } from 'react-bootstrap';

const TrangChu = () => {
  return(
  	<div>
		<Slider/>
		<div style={{margin:'auto',marginBottom:'3rem'}}>
			<div className="container-flex" style={{marginTop:"2rem"}}>
				<h4>Máy tính xách tay</h4>
					<div style={{display:'flex',marginTop:"2rem",marginRight:"1rem"}}>
						<h6 className="text-middle">Thương hiệu: </h6>
						<LogoCompanyitems/>
					</div>
					<Slideritems/>
			</div>
			 <button type="submit" class="btn btn-primary" style={{marginLeft:"43%",marginTop:'2rem'}}>Xem tất cả</button>
		</div>
	</div>
	)
  }
export default TrangChu;