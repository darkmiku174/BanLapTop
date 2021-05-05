import React from 'react';
import {Nav,Navbar,Container,Form,FormControl,Button} from 'react-bootstrap';
import { FaSearch,FaHome,FaUserAlt,FaShoppingBag } from 'react-icons/fa';

const AdminNavigationBar = () => {
  return(
      <nav class="navbar navbar-expand-md navbar-dark bg-dark" >  
        <div class="mx-auto order-0" >
            <a class="navbar-brand mx-auto" href="/">Navbar 2</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item-1">
                    <a class="nav-link" href="/taikhoan"><FaUserAlt/></a>
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
export default AdminNavigationBar;