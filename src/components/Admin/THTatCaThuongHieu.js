import React from 'react';
import SearchBox from '../../components/SearchBox'
import { FaSearch } from 'react-icons/fa';
import {Row,Col,Form,Container,InputGroup,Table,Button} from 'react-bootstrap';
const THTatCaThuongHieu = () => {
	return(
			<Container>
				
				<Row>
					<SearchBox/>
	            </Row>

	            <Row>
	            	
	            	<Table striped bordered hover style={{marginTop:'1rem'}}>
					  <thead>
					    <tr>
					      <th>Tên thương hiệu</th>
					      <th>Logo</th>
					      <th>Giới thiệu</th>
					      <th>Chỉnh sửa</th>
					    </tr>
					  </thead>
					  <tbody>
					    <tr>
					    	<td>
					      		Lenovo
					    	</td>

					    	<td>
						      	<img src="https://lumen.thinkpro.vn/backend/uploads/brand/icon/2020/8/7/lenovo.png" 
						      		 style={{width:'5rem',height:'3rem',backgroundColor:'white'}}/>
					    	</td>

						    <td>
						      	<p>text</p>
						    </td>

					      	<td>
					      		<Button style={{backgroundColor:'white',color:'black',fontSize:'12px',border:'1px solid black'}}>Edit</Button>
					      	</td> 

					    </tr>
					    <tr>
					    	<td>
					      		Alienware
					    	</td>

					    	<td>
						      	<img src="https://lumen.thinkpro.vn/backend/uploads/brand/icon/2020/8/7/razer.png" 
						      		 style={{width:'5rem',height:'3rem',backgroundColor:'white'}}/>
					    	</td>

						    <td>
						      	<p>text</p>
						    </td>
						    
					      	<td>
					      		<Button style={{backgroundColor:'white',color:'black',fontSize:'12px',border:'1px solid black'}}>Edit</Button>
					      	</td> 

					    </tr>
					    <tr>
					    	<td>
					      		Dell
					    	</td>

					    	<td>
						      	<img src="https://lumen.thinkpro.vn/backend/uploads/brand/icon/2020/8/7/dell.png" 
						      		 style={{width:'5rem',height:'3rem',backgroundColor:'white'}}/>
					    	</td>

						    <td>
						      	<p>text</p>
						    </td>
						    
					      	<td>
					      		<Button style={{backgroundColor:'white',color:'black',fontSize:'12px',border:'1px solid black'}}>Edit</Button>
					      	</td> 

					    </tr>
					    <tr>
					    	<td>
					      		Asus
					    	</td>

					    	<td>
						      	<img src="https://lumen.thinkpro.vn/backend/uploads/brand/icon/2020/8/7/asus.png" 
						      		 style={{width:'5rem',height:'3rem',backgroundColor:'white'}}/>
					    	</td>

						    <td>
						      	<p>text</p>
						    </td>
						    
					      	<td>
					      		<Button style={{backgroundColor:'white',color:'black',fontSize:'12px',border:'1px solid black'}}>Edit</Button>
					      	</td> 

					    </tr>
					    <tr>
					    	<td>
					      		Hp
					    	</td>

					    	<td>
						      	<img src="https://lumen.thinkpro.vn/backend/uploads/brand/icon/2020/8/7/hp.png" 
						      		 style={{width:'5rem',height:'3rem',backgroundColor:'white'}}/>
					    	</td>

						    <td>
						      	<p>text</p>
						    </td>
						    
					      	<td>
					      		<Button style={{backgroundColor:'white',color:'black',fontSize:'12px',border:'1px solid black'}}>Edit</Button>
					      	</td> 

					    </tr>
					    <tr>
					    	<td>
					      		Microsoft
					    	</td>

					    	<td>
						      	<img src="https://lumen.thinkpro.vn/backend/uploads/brand/icon/2020/8/7/microsoft.png" 
						      		 style={{width:'5rem',height:'3rem',backgroundColor:'white'}}/>
					    	</td>

						    <td>
						      	<p>text</p>
						    </td>
						    
					      	<td>
					      		<Button style={{backgroundColor:'white',color:'black',fontSize:'12px',border:'1px solid black'}}>Edit</Button>
					      	</td> 

					    </tr>
					    <tr>
					    	<td>
					      		Apple
					    	</td>

					    	<td>
						      	<img src="https://lumen.thinkpro.vn/backend/uploads/brand/icon/2020/8/7/apple.png" 
						      		 style={{width:'5rem',height:'3rem',backgroundColor:'white'}}/>
					    	</td>

						    <td>
						      	<p>text</p>
						    </td>
						    
					      	<td>
					      		<Button style={{backgroundColor:'white',color:'black',fontSize:'12px',border:'1px solid black'}}>Edit</Button>
					      	</td> 

					    </tr>
					    <tr>
					    	<td>
					      		Msi
					    	</td>

					    	<td>
						      	<img src="https://lumen.thinkpro.vn/backend/uploads/brand/icon/2020/9/24/5f6c4ee7ed9fd_1600933607.png" 
						      		 style={{width:'5rem',height:'3rem',backgroundColor:'white'}}/>
					    	</td>

						    <td>
						      	<p>text</p>
						    </td>
						    
					      	<td>
					      		<Button style={{backgroundColor:'white',color:'black',fontSize:'12px',border:'1px solid black'}}>Edit</Button>
					      	</td> 

					    </tr>
					  </tbody>
					</Table>
	            </Row>

			</Container>
		)
}
export default THTatCaThuongHieu;