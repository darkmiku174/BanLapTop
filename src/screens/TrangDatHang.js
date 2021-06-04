import React from 'react';
import {Col,Row,Container,Form,Button} from 'react-bootstrap'
const TrangDatHang = () => {
  return(
  	<div>
  	
  	<Container style={{marginTop:'2rem'}}>
  		<h5 style={{marginBottom:'1rem'}}>Đặt hàng</h5>
  		<Row>
	  			<Col sm={8} style={{border:'1px solid black',padding:'3rem'}}>
	  				<Row>
		  				<h6>Thông tin người nhận</h6>
		  			</Row>
		  			<Row style={{marginTop:'1rem'}}>
				  		<Col>
							<Form.Control placeholder="First name" />
						</Col>
						<Col>
							<Form.Control placeholder="Last name" />
						</Col>
					</Row>

					<Row style={{marginTop:'1rem'}}>
		  				<h6>Địa chỉ</h6>
		  			</Row>
		  			<Row style={{marginTop:'1rem'}}>
				  		<Col>
							<Form.Control placeholder="Tỉnh/Thành Phố" />
						</Col>
						<Col>
							<Form.Control placeholder="Quận huyện" />
						</Col>
						<Col>
							<Form.Control placeholder="Phường/Xã" />
						</Col>
					</Row>

		  			<Row style={{marginTop:'1rem'}}>
				  		<Col>
							<Form.Control placeholder="Số nhà, tên đường, phường xã" />
						</Col>
					</Row>

	  			</Col>
	  			<Col sm={4} style={{flexDirection:'column'}}>
	  				<Row style={{border:'0.01rem solid black',padding:'0.5rem'}}>
	  					<Col sm={7}>Đơn hàng (2sp)</Col>
	  					<Col sm={5}><a href="/giohang">Sửa ></a></Col>
	  				</Row>
	  				<Row style={{border:'0.01rem solid black',padding:'1rem'}}>
	  					<Col sm={7}>1x Dell XPS 13 9300</Col>
	  					<Col sm={5} style={{fontWeight:'bold'}}>34.990.000đ</Col>
	  				</Row>
	  				<Row style={{border:'0.01rem solid black',padding:'1rem'}}>
	  					<Col sm={7}>1x Apple Macbook Air (M1, Late 2020 - Apple Silicon) (2sp)</Col>
	  					<Col sm={5} style={{fontWeight:'bold'}}>25.490.000đ</Col>
	  				</Row>
	  				<Row style={{border:'0.01rem solid black',padding:'0.5rem'}}>
	  					<Col sm={7}>Tạm tính</Col>
	  					<Col sm={5} style={{fontWeight:'bold'}}>60.480.000đ</Col>
	  				</Row>
	  				<Row style={{border:'0.01rem solid black',padding:'0.5rem'}}>
	  					<Col sm={7}>Thành tiền</Col>
	  					<Col sm={5} style={{fontWeight:'bold'}}>60.480.000đ</Col>
	  				</Row>
	  			</Col>
  		</Row>
  		<Button style={{marginTop:'2rem'}}>Hoàn tất đặt hàng</Button>
  	</Container>
  	</div>
	)
  }
export default TrangDatHang;