import React from 'react'
import './App.css';
import TrangDangNhap from './components/TrangDangNhap';
import TrangQuenMatKhau from './components/TrangQuenMatKhau'
import NavigationBar from './components/NavigationBar' 
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <React.Fragment>     
        <Layout>
            <Router>
            
              <Switch>
                <Route exact path="/" component={TrangDangNhap}/>
                <Route path="/quenmatkhau" component={TrangQuenMatKhau}/>
              </Switch>
             
            </Router>
        </Layout>
      
    </React.Fragment>
  );
}

export default App;
