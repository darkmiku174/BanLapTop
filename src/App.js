import React from 'react'
import './App.scss';
import TrangDangNhap from './screens/TrangDangNhap';
import TrangQuenMatKhau from './screens/TrangQuenMatKhau';
import TrangChu from './screens/TrangChu';
import TrangXemTatCa from './screens/TrangXemTatCa';
import TrangXemChiTietSanPham from './screens/TrangXemChiTietSanPham';
import TrangDatHang from './screens/TrangDatHang';
import TrangTaiKhoan from './screens/TrangTaiKhoan';
import TrangDangKy from './screens/TrangDangKy';
import TrangGioHang from './screens/TrangGioHang';
import AdminTrangThemSP from './screens/AdminTrangThemSP';
import AdminTrangChu from './screens/AdminTrangChu';
import AdminTrangEditSanPham from './screens/AdminTrangEditSanPham';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Layout from './components/Layout';

function App() {
  return (
<React.Fragment>  
 
   
            <Router>           
              <Switch>
              	<Route exact path="/" component={TrangChu}/>
                <Route path="/dangnhap" component={TrangDangNhap}/>
                <Route path="/quenmatkhau" component={TrangQuenMatKhau}/>
                <Route path="/admin" component={AdminTrangChu}/>
                <Route path="/xemtatca" component={TrangXemTatCa}/>
                <Route path="/dathang" component={TrangDatHang}/>
                <Route path="/chitietsanpham" component={TrangXemChiTietSanPham}/>
                <Route path="/dangky" component={TrangDangKy}/>
                <Route path="/giohang" component={TrangGioHang}/>
                <Route path="/taikhoan" component={TrangTaiKhoan}/>
                <Route path="/themsanpham" component={AdminTrangThemSP}/>
                <Route path="/suathongtin" component={AdminTrangEditSanPham}/>
              </Switch>   
            </Router>
  
    </React.Fragment>
  );
}

export default App;
