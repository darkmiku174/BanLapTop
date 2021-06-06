import React from "react";
import {Card,ListGroup,ListGroupItem,Button,Container} from "react-bootstrap";

const ProductItems = () =>{
  return (
  	<div>
	    <div className="card" style={{width:'12.5rem',borderRadius:'0'}}>
	    	<div className="card-info">
			  <img src="https://lumen.thinkpro.vn//backend/uploads/product/color_images/2020/10/3/xps9310s-01.jpg" alt="product" style={{width:"100%"}}/>
			  <div class="container">
			   	<h6>Dell XPS 13 7390</h6>
		      	<p style={{fontSize:"13"}}>SKUsadsd</p>
		      	<p style={{color:"#ed8021"}}> asd</p> 
			  </div>
			</div>
			<div className="card-hide" style={{zIndex:'1'}}>
				 <div className="card-header" style={{width:'12.4rem',backgroundColor:'white',fontSize:'13px',backgroundColor:'#f2f2f2',boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)'}}>
				 	Intel Core i7-1165G7, RAM 16GB, 512GB m.2 NVMe, 13.4" FHD+ IPS (1920x1200),  Intel Iris Xe, 52Wh, Silver
				 </div>
				 <div className="card-footer" style={{backgroundColor:'white'}}>
				 	<Button style={{fontSize:'14px',backgroundColor:'#3ac9c9',borderRadius:'4rem',marginLeft:'0.5rem'}}>Thêm vào giỏ hàng</Button>
				 </div>
			</div>
		</div>
		
	</div>
)
}
export default ProductItems;