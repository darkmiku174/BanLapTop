import React,{ useRef, useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import SliderProduct from '../components/SliderProduct';
import {Container} from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation
} from 'swiper/core';
// install Swiper modules
SwiperCore.use([Pagination,Navigation]);
const TrangXemTatCa = () => {

	 // const pagination = {
		// 	  "clickable": true,
		// 	  "renderBullet": function (index, className) {
		// 	          return '<span class=\"' + className + '\">' + (index + 1) + '</span>';
		// 	        }
		// 		}
  return(
  	<>
	  	<NavigationBar/>
	  	<Container style={{marginTop:'2rem'}}>
	  	    <Swiper pagination={{
				  "type": "fraction"
				}} navigation={true} className="mySwiper">
			    <SwiperSlide><SliderProduct/></SwiperSlide>
			    <SwiperSlide><SliderProduct/></SwiperSlide>
			    <SwiperSlide><SliderProduct/></SwiperSlide>
			    <SwiperSlide><SliderProduct/></SwiperSlide>
		    </Swiper>
		</Container>
	</>
	)
  }
export default TrangXemTatCa;