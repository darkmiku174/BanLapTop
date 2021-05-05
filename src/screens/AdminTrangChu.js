import React from 'react';
import Layout from '../components/Layout'
import AdminNavigationBar from '../components/Admin/AdminNavigationBar';
import LeftNavigation from '../components/Admin/LeftNavigation';
import MenuTabs from '../components/Admin/MenuTabs';
import {Button,Container,Row,Col} from 'react-bootstrap';

const AdminTrangChu = () => {
  return(
  	<div>
  		<AdminNavigationBar/>
  		<Row>
  			<Col sm={2}>
  				<LeftNavigation/>
  			</Col>
  			<Col sm={10}>
  				<MenuTabs/>
  				<p>asd</p>
  			</Col>
  		</Row>
  	</div>
)
  }
export default AdminTrangChu;