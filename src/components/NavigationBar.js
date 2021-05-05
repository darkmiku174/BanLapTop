import React from 'react';
import {Nav,Navbar,Container,Form,FormControl,Button} from 'react-bootstrap';
import { FaSearch,FaHome,FaUserAlt,FaShoppingBag } from 'react-icons/fa';

const NavigationBar = () => {
  return(
<nav class="navbar navbar-expand-md navbar-dark bg-dark" >  
    <div class="mx-auto order-0" >
        <a class="navbar-brand mx-auto" href="/home">Navbar 2</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>
    <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item-1">
                <a class="nav-link" href="/giohang"><FaShoppingBag/></a>
            </li>
            <li class="nav-item-1">
                <div class="dropdown">
                  <span><a class="nav-link" href="/taikhoan"><FaUserAlt/></a></span>
                  <div class="dropdown-content" style={{display:'flex',flexDirection:'column'}}>
                     <a href="/taikhoan">Tài khoản</a>
                  
                      <a href="#">Đăng xuất</a>
                  </div>
                </div>
            </li>
        </ul>
    </div>
    <div class="buscar-caja">
         <input type="text" name="" class="buscar-txt" placeholder="Buscar..."/>
         <a class="buscar-btn">
          <FaSearch/>
         </a>
      </div>
</nav>
    )
	}
export default NavigationBar;