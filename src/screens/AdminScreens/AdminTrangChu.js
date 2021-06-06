import React, {useState} from 'react';
import Layout from '../../components/Layout'
import QLSanPham from '../../components/Admin/QLSanPham'
import QLDonHang from '../../components/Admin/QLDonHang';
import QLThuongHieu from '../../components/Admin/QLThuongHieu';
import { FaTrash,FaPen,FaMoneyCheck,FaBox,FaRegLightbulb} from 'react-icons/fa';
import {Button,Container,Row,Col,Navbar} from 'react-bootstrap';

const AdminTrangChu = () => {
	const [active,setActive]= useState("QLDH");
  return(
    <>
      <div>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="=&quot;IE=edge&quot;/" />
        <meta name="google" value="notranslate" />
        <title>Side Menu</title>
        <link rel="stylesheet" type="text/css" href="css/menu.css" />
        <link rel="stylesheet" type="text/css" href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" />
        <nav className="main-menu">
          <div style={{height:'56px',backgroundColor:'#343a40',padding:'1rem'}}>            
          </div> 
          <div/>
          <div className="scrollbar" id="style-1">
            <ul>
              <li>                                   
                <a href="/admin/donhang#" onClick={() => setActive("QLDH")}>
                  <i className="fa fa-list-alt fa-lg" />
                  <span className="nav-text">Quản lý đơn hàng</span>
                </a>
              </li>   
              <li>                                 
                <a href="/admin/sanpham#" onClick={() => setActive("QLSP")}>
                  <i className="fa fa-laptop fa-lg" />
                  <span className="nav-text">Quản lý sản phẩm</span>
                </a>
              </li>   
              <li>                                 
                <a href="/admin/thuonghieu#" onClick={() => setActive("QLTH")}>
                  <i className="fa fa-plus-square fa-lg" />
                  <span className="nav-text">Quản lý thương hiệu</span>
                </a>
              </li>   
             
            </ul>
          </div>
          </nav>
      </div>
      <div>
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home" style={{float:'right'}}>
          <p>TLT</p>
        </Navbar.Brand>
      </Navbar>
      </div>
      <div className="mcw">
          {active === "QLDH" && <QLDonHang/> }
          {active === "QLSP" && <QLSanPham/> }
          {active === "QLTH" && <QLThuongHieu/>}
        </div>
    </>
    )
  }
export default AdminTrangChu;