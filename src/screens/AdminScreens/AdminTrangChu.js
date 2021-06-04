import React, {useState} from 'react';
import Layout from '../../components/Layout'
import QLSanPham from '../../components/Admin/QLSanPham'
import QLDonHang from '../../components/Admin/QLDonHang';
import { FaTrash,FaPen,FaMoneyCheck,FaBox,FaRegLightbulb} from 'react-icons/fa';
import {Button,Container,Row,Col} from 'react-bootstrap';

const AdminTrangChu = () => {
	const [active,setActive]= useState("QLDH");
  return(
  /*	<div>
  		
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
  	</div>*/
    <div>
        {/*msb: main sidebar*/}
        <div className="msb" id="msb">
          <nav className="navbar navbar-default" role="navigation">
            {/* Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header">
              <div className="brand-wrapper">
                {/* Brand */}
                <div className="brand-name-wrapper">
                  <a className="navbar-brand" href="#">
                    SAITAMA
                  </a>
                </div>
              </div>
            </div>
            {/* Main Menu */}
            <div className="side-menu-container">
              <ul className="nav navbar-nav">
                <li> 
                  <a href="#" onClick={() => setActive("QLDH")} style={{fontSize:'16px',display:'flex'}}>
                    <FaMoneyCheck style={{
                      height:'2rem',
                      marginRight:'1rem'}}/> 
                      Quản lý đơn hàng
                  </a>
                </li>
                <li> 
                  <a href="#" onClick={() => setActive("QLSP")} style={{fontSize:'16px',display:'flex'}}>
                    <FaBox style={{
                      height:'2rem',
                      marginRight:'1rem'}}/>
                      Quản lý sản phẩm
                  </a> 
                </li>
                <li> 
                  <a href="#" onClick={() => setActive("QLTH")} style={{fontSize:'16px',display:'flex'}}>
                  <FaRegLightbulb style={{
                      height:'2rem',
                      marginRight:'1rem'}}/> 
                  Quản lý thương hiệu</a>
                </li>
              </ul>
            </div>{/* /.navbar-collapse */}
          </nav>  
        </div>
        {/*main content wrapper*/}
        <div className="mcw">
          {active === "QLDH" && <QLDonHang/> }
          {active === "QLSP" && <QLSanPham/> }
        </div>
      </div>
)
  }
export default AdminTrangChu;