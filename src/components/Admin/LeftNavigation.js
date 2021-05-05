import React from 'react'
import { FaSearch,FaHome,FaUserAlt,FaShoppingBag } from 'react-icons/fa';
const LeftNavigation = () =>{
	return(
		<div class="sidenav">
		  <a href="#about">Quản lý đơn hàng</a>
		  <div class="dropdown-container">
		    <a href="#">Tất cả đơn hàng</a>
		    <a href="#">Đơn hủy</a>
		    <a href="#">Trả hảng/Hoàn tiền</a>
		  </div>
		  <a href="#contact">Quản lý sản phẩm</a>
		</div>
	)
}
export default LeftNavigation;