import React from 'react';
import THTatCaThuongHieu from '../Admin/THTatCaThuongHieu';
import {Card} from 'react-bootstrap';
import { Breadcrumbs} from '@material-ui/core';

const QLThuongHieu = () => {
  return(
  	<>
  		<div style={{backgroundColor:'#3ac9c9',marginLeft:'3.8rem',paddingLeft:'2rem',paddingBottom:'1rem'}}>
			<p style={{color:'white',fontSize:'23px'}}>Thương hiệu</p>
			<Breadcrumbs aria-label="breadcrumb" style={{color:'white'}}>
				<a color="inherit" href="/" >
					TLT
				</a>
				<a color="inherit" href="/xemtatca">
					thuonghieu
				</a>
			</Breadcrumbs>
		</div>
	  	<Card style={{padding:'2rem',width:'95%',left:'3.7rem',boxShadow:'none',backgroundColor:'#f7f7f7'}}>
	  	
	  	<THTatCaThuongHieu/>
	  	</Card>
  	</>
)
  }
export default QLThuongHieu;