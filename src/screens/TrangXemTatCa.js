import React from 'react';
import SliderProduct from '../components/SliderProduct';
import {Container} from "react-bootstrap";
const TrangXemTatCa = () => {
  return(
  	<Container style={{marginTop:'1rem'}}>
	  	<h4>Máy tính xách tay</h4>
	  	<div>
		  	<div style={{display:'flex'}}>
		  		<p>Sắp xếp theo: </p>
		  		<a href="" style={{marginLeft:'2rem'}}><p>Giá tăng dần</p></a>
		  		<a href="" style={{marginLeft:'2rem'}}><p>Giá giảm dần</p></a>
		  	</div>
		  	<div className='slider-container'>
		  		<SliderProduct/>
		  	</div>
		</div>
	</Container>
	)
  }
export default TrangXemTatCa;