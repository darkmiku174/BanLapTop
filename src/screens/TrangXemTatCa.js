import React from "react";
import { Pagination } from '@material-ui/lab';
import { Breadcrumbs} from '@material-ui/core';
import {Row,Col} from 'react-bootstrap';
import ProductItems from '../components/ProductItems';
import {Container,Card,Form} from 'react-bootstrap';

const  TrangXemTatCa = () => {
  return (
  	<>
  	<Breadcrumbs aria-label="breadcrumb" style={{fontSize:'11px',marginBottom:'3rem'}}>
		<a color="inherit" href="/" >
			TLT
		</a>
		<a color="inherit" href="/xemtatca">
			xemtatca
		</a>
	</Breadcrumbs>
  	<Container>
		  	
			<Row>
				<h5>Laptop</h5>
			</Row>
			<Row>

				<Col md={2} style={{border:'1px solid white'}}>	
					<Row style={{marginBottom:'1rem',color:'white'}}>
					.
					</Row>	
					<Row style={{
						justifyContent:'space-between',
						border:'1px solid #d4d4d4',
						padding:'0.5rem'
						}}>
						<p style={{fontWeight:'bold',fontSize:'14px'}}>Bộ lọc</p>
						<a href="#" style={{fontSize:'13px'}}>bỏ lọc</a>
					</Row>
					<Row style={{
						justifyContent:'space-between',
						border:'1px solid #d4d4d4',
						padding:'0.5rem',
						fontSize:'13px'
						}}>
						<Form style={{display:'flex',flexDirection:'column'}}>
							<p style={{fontWeight:'bold',fontSize:'14px'}}>Thương hiệu</p>
						 	<Form.Check inline label="Lenovo" name="group1"  />
						 	<Form.Check inline label="Dell" name="group2"  />
						 	<Form.Check inline label="Alienware" name="group1"  />
						 	<Form.Check inline label="Hp" name="group1"  />
						 	<Form.Check inline label="Microsoft" name="group1"  />
						 	<Form.Check inline label="Apple" name="group1"  />
						 </Form>
					</Row>
					<Row style={{
						justifyContent:'space-between',
						border:'1px solid #d4d4d4',
						padding:'0.5rem',
						fontSize:'13px'
						}}>
						<Form style={{display:'flex',flexDirection:'column'}}>
							<p style={{fontWeight:'bold',fontSize:'14px'}}>Khoảng giá</p>
						 	<Form.Check inline label="Trên 50 triệu" name="group1"  />
						 	<Form.Check inline label="40 - 50 triệu" name="group2"  />
						 	<Form.Check inline label="30 - 40 triệu" name="group1"  />
						 	<Form.Check inline label="20 - 30 triệu" name="group1"  />
						 	<Form.Check inline label="15 - 20 triệu" name="group1"  />
						 	<Form.Check inline label="10 - 15 triệu" name="group1"  />
						 	<Form.Check inline label="dưới 10 triệu" name="group1"  />
						 </Form>
					</Row>
					{/*<Row style={{
						justifyContent:'space-between',
						border:'1px solid #d4d4d4',
						padding:'0.5rem'
						}}>
						<p style={{fontWeight:'bold',fontSize:'14px'}}>Bộ lọc</p>
						<a href="#" style={{fontSize:'13px'}}>bỏ lọc</a>
					</Row>*/}
				</Col>
				<Col md={10}>
					<Container>
					  	<Row>
			  		
			  			</Row>

			  			<Row style={{display:'flex'}}>
			  				<p style={{fontWeight:'bold',marginBottom:'1rem'}}>Sắp xếp theo :</p>
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
		    	</Col>
    		</Row>
    </Container>
    </>
  );
}
export default TrangXemTatCa;