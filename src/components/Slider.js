import React from 'react';
import {Carousel,Container} from 'react-bootstrap';

const Slider = () => {
  return(
  	<div className="carousel-container" style={{margin:"auto",width:"70%"}}>
		<Carousel>
		  <Carousel.Item>
		    <img
		      className="d-block w-100"
		      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEWAgICQdD0xAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII="
		      alt="First slide"
		    />
		    <Carousel.Caption>
		      <h3>Ưu đãi ThinkPad</h3>
		      <p>quà cực nhiều giảm giá cực đã</p>
		    </Carousel.Caption>
		  </Carousel.Item>
		  <Carousel.Item>
		    <img
		      className="d-block w-100"
		      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEWAgICQdD0xAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII="
		      alt="Second slide"
		    />

		    <Carousel.Caption>
		      <h3>Second slide label</h3>
		      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
		    </Carousel.Caption>
		  </Carousel.Item>
		  <Carousel.Item>
		    <img
		      className="d-block w-100"
		      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEWAgICQdD0xAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII="
		      alt="Third slide"
		    />

		    <Carousel.Caption>
		      <h3>Third slide label</h3>
		      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
		    </Carousel.Caption>
		  </Carousel.Item>
		</Carousel>
		</div>
	)
  }
export default Slider;