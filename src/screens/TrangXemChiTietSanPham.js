import React from 'react';
import {Row,Col,Container,Button} from 'react-bootstrap';
const TrangXemChiTietSanPham = () => {
	return(
			<Container style={{margin:'auto',padding:'2rem',marginTop:'2rem'}}>
				<Row>
					<Col sm={6}>
						<Container>
						<img src="https://phucanhcdn.com/media/product/39638_gaming_legion_5_ha5.jpg" alt="Lenovo-Legion"
						width="100%"
						height="70%"
						/>
						</Container>
						<Button style={{marginTop:'0.7rem',marginLeft:'10rem'}}>Thêm vào giỏ hàng</Button>
					</Col>
					<Col sm={6}>
						<h3>Lenovo Legion 5 AMD</h3>
						<div style={{display:'flex'}}>
							<p>MPN: </p>
							<p style={{marginLeft:'1rem'}}>82B10051US</p>
							<p style={{marginLeft:'3rem'}}>SKU: </p>
							<p style={{marginLeft:'1rem'}}>Legion5nA02NS</p>
						</div>
						<div style={{display:'flex'}}><p style={{fontWeight:'bold'}}>Vi xử lí:  </p> <p>AMD Ryzen 7 4800H, 8 nhân/16 luồng</p></div>
						<div style={{display:'flex'}}><p style={{fontWeight:'bold'}}>Màn hình:  </p> <p>15.6" Full HD IPS (1920 x 1080) 144Hz, màn nhám</p></div>
						<div style={{display:'flex'}}><p style={{fontWeight:'bold'}}>Độ phủ màu:  </p> <p>100%sRGB</p></div>
						<div style={{display:'flex'}}><p style={{fontWeight:'bold'}}>RAM:  </p> <p>16GB DDR4 3200MHz (Năng cấp tối đa 32GB)</p></div>
						<div style={{display:'flex'}}><p style={{fontWeight:'bold'}}>Card đồ họa:  </p> <p>Nvidia Geforce GTX 1600Ti 6GB GDDR6</p></div>
						<div style={{display:'flex'}}><p style={{fontWeight:'bold'}}>Lưu trữ:  </p> <p>256 GB NVMe (năng cấp tối đa 2TB)</p></div>
						<div style={{display:'flex'}}><p style={{fontWeight:'bold'}}>Pin:  </p> <p>60Wh</p></div>
						<div style={{display:'flex'}}><p style={{fontWeight:'bold'}}>Cổng kết nối:  </p> <p> 4 x USB-A, 1 x USB-C, 1x HDIM, 1 x Jack 3.5mm</p></div>
						<div style={{display:'flex'}}><p style={{fontWeight:'bold'}}>Cận nặng:  </p> <p>2.3 kg</p></div>
						<div style={{display:'flex'}}><p style={{fontWeight:'bold'}}>Hệ điều hành:  </p> <p>Windows 10 Home Single Language bản quyền</p></div>
						<div style={{display:'flex'}}><p style={{fontWeight:'bold'}}>Màu sắc  </p> <p>Phantom Black</p></div>
						

					</Col>
				</Row>
			</Container>
		)
}
export default TrangXemChiTietSanPham;