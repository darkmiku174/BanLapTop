import React from 'react'
import {Card,Form,Button} from 'react-bootstrap';
const TrangQuenMatKhau= () => {
	return(
		<div className="card" style={{ width: '50%',padding:'70px',margin:'auto'}}>
				<div className="card text-center" style={{border:'none'}} >
					<div className="card-header" style={{background:'white'}} >
						<h4>Title</h4>
					</div>
				</div>
					<div className="card-body">
						<div className="card text-center" style={{border:'none'}} >							
							<h4>Quên mật khẩu ?</h4>
							<p>Nhập email đã đăng ký của bạn xuống đây, hệ thống sẽ gửi mã reset mật khẩu</p>
						</div>
						<Form>
							<div className="form-group">
								<label>Email:</label>
								<input type="email" className="form-control" id="1" placeholder="Nhập email đã đăng ký"></input>
							</div>		
							<div className="form-group">			  
				  				<input type="submit" className="form-control" id="2" value="Gửi" style={{height:'3rem',background:'blue',color:'white'}}></input>
				  			<Form.Text className="text-muted">
				  			 <p style={{textAlign: 'right'}}>Bạn đã nhớ mật khẩu ? <a href="">Hãy thử đăng nhập lại</a></p>
						    </Form.Text>
							</div>			
						</Form>
					</div>
			</div>
		)

		
}
export default TrangQuenMatKhau;