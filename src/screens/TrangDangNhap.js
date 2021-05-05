import React from 'react'
import {Card,Form,Button} from 'react-bootstrap';
const TrangDangNhap = () => {
	return(	
			<div className="card" style={{ width: '50%',padding:'70px',margin:'auto'}}>
				<div className="card text-center" style={{border:'none'}} >
					<div className="card-header" style={{background:'white'}} >
						
					</div>
				</div>
					<div className="card-body">
						<Form>
							<div className="form-group">
								<label>Email:</label>
								<input type="email" className="form-control" id="1" placeholder="user@example.com"></input>
							</div>
							<div className="form-group">
								<label>Mật khẩu:</label>
								<input type="password" className="form-control" id="2" placeholder="Nhập mật khẩu"></input>
							</div>
							<Form.Text className="text-muted">
						      <a href="https://s.memehay.com/files/posts/20200815/fa609c2d430b1e93190c0711dd4a4b62cho-vang-cam-sung-noi-bat-ngo-khong-thang-lon.jpg">Quên mật khẩu ?</a>
						    </Form.Text>
						</Form>
					</div>
				<div className="form-group">			  
				  <a href="/trangchu">
				  <input type="submit" className="form-control" id="3" value="Đăng nhập" style={{background:'none'}}></input>
				  </a>
				</div>
				<div className="form-group">	
				   <a href="/trangchu">
				   <input type="submit" className="form-control" id="4" value="Đăng Ký" ></input>
				   </a>
				</div>		
			</div>
	)
}
export default TrangDangNhap;