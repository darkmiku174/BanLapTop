import React from "react";
import { Pagination } from '@material-ui/lab';
import { Breadcrumbs} from '@material-ui/core';
import {Row,Col} from 'react-bootstrap';
import ProductItems from '../components/ProductItems';
import {Container,Card} from 'react-bootstrap';

const  TrangXemTatCa = () => {
  return (
  	<>
  	<Breadcrumbs aria-label="breadcrumb">
			  <a color="inherit" href="/" >
			   TLT
			  </a>
			  <a color="inherit" href="/xemtatca">
			   xemtatca
			  </a>
		</Breadcrumbs>
  	<Container style={{marginLeft:'15%'}}>
  	<Row>
  		
  			</Row>

  			<Row style={{display:'flex'}}>
  				<p style={{fontWeight:'bold'}}>Sắp xếp theo :</p>
  				<a style={{marginLeft:'1rem'}} href="#">Giá tăng dần </a>
  				<a style={{marginLeft:'1rem'}} href="#">Giá giảm dần </a>
  			</Row>
  			<Row>
  			<Row>
		    	<a href="/chitietsanpham"><ProductItems/></a>
		    	<a href="/chitietsanpham"><ProductItems/></a>
		    	<a href="/chitietsanpham"><ProductItems/></a>
		    	<a href="/chitietsanpham"><ProductItems/></a>
			</Row>
			<Row>
		    	<a href="/chitietsanpham"><ProductItems/></a>
		    	<a href="/chitietsanpham"><ProductItems/></a>
		    	<a href="/chitietsanpham"><ProductItems/></a>
		    	<a href="/chitietsanpham"><ProductItems/></a>
			</Row>
			<Row>
		    	<a href="/chitietsanpham"><ProductItems/></a>
		    	<a href="/chitietsanpham"><ProductItems/></a>
		    	<a href="/chitietsanpham"><ProductItems/></a>
		    	<a href="/chitietsanpham"><ProductItems/></a>
			</Row>
			<Row>
		    	<a href="/chitietsanpham"><ProductItems/></a>
		    	<a href="/chitietsanpham"><ProductItems/></a>
		    	<a href="/chitietsanpham"><ProductItems/></a>
		    	<a href="/chitietsanpham"><ProductItems/></a>
			</Row>
  			<Pagination count={10} style={{marginLeft:'18%',marginTop:'5%'}}/>
  		
    </Row>
    </Container>
    </>
  );
}
export default TrangXemTatCa;