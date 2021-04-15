import SlideritemsCard from '../components/SlideritemsCard';
const products = [
	
	{
		id:1,
		name:'Dell XPS 13 7390',
		sku:'XPS739004NU',
		price:22990000,
		image:'https://laptopvang.vn/wp-content/uploads/2020/10/dell_Xps_9310_13_inch_2020_laptopvang-5.jpg'
	},
	{
		id:2,
		name:'Dell XPS 13 7390',
		sku:'XPS739004NU',
		price:22990000,
		image:'https://laptopvang.vn/wp-content/uploads/2020/10/dell_Xps_9310_13_inch_2020_laptopvang-5.jpg'
	},
	{
		id:3,
		name:'Dell XPS 13 7390',
		sku:'XPS739004NU',
		price:22990000,
		image:'https://laptopvang.vn/wp-content/uploads/2020/10/dell_Xps_9310_13_inch_2020_laptopvang-5.jpg'
	},
	{
		id:4,
		name:'Dell XPS 13 7390',
		sku:'XPS739004NU',
		price:22990000,
		image:'https://laptopvang.vn/wp-content/uploads/2020/10/dell_Xps_9310_13_inch_2020_laptopvang-5.jpg'
	},
	{
		id:5,
		name:'Dell XPS 13 7390',
		sku:'XPS739004NU',
		price:22990000,
		image:'https://laptopvang.vn/wp-content/uploads/2020/10/dell_Xps_9310_13_inch_2020_laptopvang-5.jpg'
	},

]
	const productList = products.map( products => (
		<SlideritemsCard products={products}/> 
		))
	export default products;