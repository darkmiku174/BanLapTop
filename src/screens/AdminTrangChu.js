import React, {useState} from 'react';
import Layout from '../components/Layout'
import QLSanPham from '../components/Admin/QLSanPham'
import QLDonHang from '../components/Admin/QLDonHang';
import AdminNavigationBar from '../components/Admin/AdminNavigationBar';
import {Button,Container,Row,Col} from 'react-bootstrap';

const AdminTrangChu = () => {
	const [active,setActive]= useState("QLDH");
  return(
  	<div>
  		<AdminNavigationBar/>
  		
  		<Row>
  			<Col sm={2}> 
  				<div>
					<div class="sidenav">
					  <a href="#" onClick={() => setActive("QLDH")}>Quản lý đơn hàng</a>
					  <a href="#" onClick={() => setActive("QLSP")}>Quản lý sản phẩm</a>
					</div>
				</div>
  			</Col>
  			<Col sm={10}>
  				
				{active === "QLDH" && <QLDonHang/> }
				{active === "QLSP" && <QLSanPham/> }
  				
  			</Col>
  		</Row>
  	</div>
)
  }
export default AdminTrangChu;