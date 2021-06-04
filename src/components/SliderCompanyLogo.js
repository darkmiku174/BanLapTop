import React from 'react'
import CompanyLogo from '../components/CompanyLogo'
import {Carousel,Row,Col,Card} from 'react-bootstrap'
const SliderCompanyLogo =() => {
	return(
		<>
		<div style={{display:'flex',marginTop:'2rem',marginBottom:'1rem'}}>
			<h6 style={{padding:'20px 0'}}>Thương hiệu </h6>
		 	<Row style={{marginLeft:'2rem',marginBottom:'1rem'}}>
				<Card style={{ width: '7rem',marginLeft:"0.3rem" }}>
			      <Card.Img variant="top" src="https://lumen.thinkpro.vn/backend/uploads/brand/icon/2020/8/7/lenovo.png" />  
			    </Card>
		    	<Card style={{ width: '7rem',marginLeft:"0.3rem" }}>
			      <Card.Img variant="top" src="https://lumen.thinkpro.vn/backend/uploads/brand/icon/2020/8/7/razer.png"/>  
			    </Card>
			    <Card style={{ width: '7rem',marginLeft:"0.3rem" }}>
			      <Card.Img variant="top" src="https://lumen.thinkpro.vn/backend/uploads/brand/icon/2020/8/7/dell.png" />  
			    </Card>
			    <Card style={{ width: '7rem',marginLeft:"0.3rem" }}>
			      <Card.Img variant="top" src="https://lumen.thinkpro.vn/backend/uploads/brand/icon/2020/8/7/asus.png" />  
			    </Card>
			    <Card style={{ width: '7rem',marginLeft:"0.3rem" }}>
			      <Card.Img variant="top" src="https://lumen.thinkpro.vn/backend/uploads/brand/icon/2020/8/7/microsoft.png" />  
			    </Card>
			    <Card style={{ width: '7rem',marginLeft:"0.3rem" }}>
			      <Card.Img variant="top" src="https://lumen.thinkpro.vn/backend/uploads/brand/icon/2020/8/7/hp.png" />  
			    </Card>
			    <Card style={{ width: '7rem',marginLeft:"0.3rem" }}>
			      <Card.Img variant="top" src="https://lumen.thinkpro.vn/backend/uploads/brand/icon/2020/8/7/apple.png" />  
			    </Card>
			    <Card style={{ width: '7rem',marginLeft:"0.3rem" }}>
			      <Card.Img variant="top" src="https://lumen.thinkpro.vn/backend/uploads/brand/icon/2020/9/24/5f6c4ee7ed9fd_1600933607.png" />  
			    </Card>
		    </Row>
		</div>
		<div style={{display:'flex'}}>
			<h6 style={{padding:'7px 0'}}>Khoảng giá </h6>
		 	<Row style={{marginLeft:'4rem',marginBottom:'1rem',display:'flex'}}>
				<Card className="card-price" style={{marginLeft:'1rem',width:'7rem',height:'2.4rem',justifyContent:'center',textAlign:'center',fontWeight:'bold',fontSize:'13px',padding:'0.2rem'}}>
					Trên 50 triệu
				</Card>
				<Card className="card-price" style={{marginLeft:'1rem',width:'7rem',height:'2.4rem',justifyContent:'center',textAlign:'center',fontWeight:'bold',fontSize:'13px',padding:'0.2rem'}}>
					40 - 50 triệu
				</Card>
				<Card className="card-price" style={{marginLeft:'1rem',width:'7rem',height:'2.4rem',justifyContent:'center',textAlign:'center',fontWeight:'bold',fontSize:'13px',padding:'0.2rem'}}>
					30 - 40 triệu
				</Card>
				<Card className="card-price" style={{marginLeft:'1rem',width:'7rem',height:'2.4rem',justifyContent:'center',textAlign:'center',fontWeight:'bold',fontSize:'13px',padding:'0.2rem'}}>
					20 - 30 triệu
				</Card>
				<Card className="card-price" style={{marginLeft:'1rem',width:'7rem',height:'2.4rem',justifyContent:'center',textAlign:'center',fontWeight:'bold',fontSize:'13px',padding:'0.2rem'}}>
					15 - 20 triệu
				</Card>
				<Card className="card-price" style={{marginLeft:'1rem',width:'7rem',height:'2.4rem',justifyContent:'center',textAlign:'center',fontWeight:'bold',fontSize:'13px',padding:'0.2rem'}}>
					10 - 15 triệu
				</Card>
				<Card className="card-price" style={{marginLeft:'1rem',width:'7rem',height:'2.4rem',justifyContent:'center',textAlign:'center',fontWeight:'bold',fontSize:'13px',padding:'0.2rem'}}>
					dưới 10 triệu
				</Card>
		    </Row>
		</div>
		</>
		)
}
export default SliderCompanyLogo;