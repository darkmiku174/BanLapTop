import React from 'react'
import './App.scss';
import TrangDangNhap from './screens/TrangDangNhap';
import TrangQuenMatKhau from './screens/TrangQuenMatKhau';
import TrangChu from './screens/TrangChu';
import NavigationBar from './components/NavigationBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <React.Fragment>  
    <NavigationBar/>   
        <Layout>
            <Router>           
              <Switch>
                <Route exact path="/" component={TrangDangNhap}/>
                <Route path="/quenmatkhau" component={TrangQuenMatKhau}/>
                <Route path="/Home" component={TrangChu}/>
              </Switch>   
            </Router>
        </Layout>
    </React.Fragment>
  );
}

export default App;
