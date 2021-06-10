import React from 'react';
import DHMenuTabs from '../Admin/DHMenuTabs';
import { Breadcrumbs } from '@material-ui/core';
import { Card } from 'react-bootstrap';

const QLDonHang = () => {
	return (
		<>
			<div style={{ backgroundColor: '#3ac9c9', marginLeft: '3.8rem', paddingLeft: '2rem', paddingBottom: '1rem' }}>
				<p style={{ color: 'white', fontSize: '23px' }}>Đơn hàng</p>
				<Breadcrumbs aria-label="breadcrumb" style={{ color: 'white' }}>
					<a color="inherit" href="/admin" >
						TLT
				</a>
					<a color="inherit" href="/admin/donhang">
						donhang
				</a>
				</Breadcrumbs>
			</div>
			<Card style={{ paddingLeft: '2rem', paddingRight: '2rem', width: '95%', left: '3.7rem', boxShadow: 'none', backgroundColor: 'white' }}>
				<DHMenuTabs />
			</Card>
		</>
	)
}
export default QLDonHang;