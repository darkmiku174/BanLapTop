import React from 'react';
import Footer from '../components/Footer'
import NavigationBar from '../components/NavigationBar'
import  {Container} from 'react-bootstrap';

const Layout = (props) => (
	<>
	<NavigationBar/>
	<Container>
	{props.children}
	</Container>
	<Footer/>
	</>
)
export default Layout;