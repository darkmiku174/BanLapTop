import React from 'react';
import {Tabs,Tab} from 'react-bootstrap';
const MenuTabs = () => {
	return(
		<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
		  <Tab eventKey="tatcadonhang" title="Tất cả đơn hàng">

		  </Tab>
		  <Tab eventKey="choxacnhan" title="Chờ xác nhận">

		  </Tab>
		  <Tab eventKey="cholayhang" title="Chờ lấy hàng">

		  </Tab>
		   <Tab eventKey="danggiao" title="Đang giao">

		  </Tab>
		   <Tab eventKey="dagiao" title="Đã giao">

		  </Tab>
		   <Tab eventKey="donhuy" title="Đơn hủy">

		  </Tab>
		   <Tab eventKey="trahang" title="Trả hàng/Hoàn tiền">

		  </Tab>
		</Tabs>
		)
}
export default MenuTabs;