import { Link } from 'react-router-dom';
import React from 'react'
import { Form } from 'react-bootstrap';
import { Component } from 'react';
import axios from "axios"
class TrangDangNhap extends Component {

	constructor(props) {
		super(props);
		this.state = {
			user: "",
			password: "",
			users:[]
		}
	}

	componentDidUpdate() {
		var{user, password} =this.state
		axios({
			method: 'GET',
			url: 'http://localhost:5000/api/users/search?email='+user+'&password='+password,
			data: null
		}).then(res => {
			console.log(res);
			this.setState({
				users: res.data
			});
		}).catch(err => {
			console.log(err);
		})
	}

	onChange = (e) => {
		var target = e.target;
		var name = target.name;
		var value = target.value;
		this.setState({
			[name]: value
		})
	}

	onClick = (e) => {	
		var {  users } = this.state
		if(users === null){
			e.preventDefault()
		}else{
			localStorage.setItem("USER", JSON.stringify(users))
		}
	}

	render() {
		return (
			<div className="card" style={{ width: '50%', padding: '70px', margin: 'auto' }}>
				<div className="card text-center" style={{ border: 'none' }} >
					<div className="card-header" style={{ background: 'white' }} >

					</div>
				</div>
				<div className="card-body">
					<Form>
						<div className="form-group">
							<label>Email:</label>
							<input name="user" type="email" className="form-control" id="1" placeholder="user@example.com" onChange={this.onChange}></input>
						</div>
						<div className="form-group">
							<label>Mật khẩu:</label>
							<input name="password" type="password" className="form-control" id="2" placeholder="Nhập mật khẩu" onChange={this.onChange}></input>
						</div>
						<Form.Text className="text-muted">
							<Link to="https://s.memehay.com/files/posts/20200815/fa609c2d430b1e93190c0711dd4a4b62cho-vang-cam-sung-noi-bat-ngo-khong-thang-lon.jpg">Quên mật khẩu ?</Link>
						</Form.Text>
						<Link to="/">
							<input onClick={this.onClick} type="submit" className="form-control" id="3" value="Đăng nhập" style={{ background: 'none' }} />
						</Link>
						<Link to="/register">
							<input type="submit" className="form-control" id="4" value="Đăng Ký" />
						</Link>
					</Form>
				</div>

			</div>
		)
	}
}
export default TrangDangNhap;