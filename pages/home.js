import React from "react"
import Layout from "../layouts"
import Link from "next/link";
//import Tabs from "../components/Tabs"
import Carousel from 'react-bootstrap/Carousel'


const home = props => {
  return (
    <Layout>
       <div>
      {/* <img src={require('../image/picture1.jpg')} class="img-thumbnail"/> */}
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
     src={require('../image/slider1.png')} class="img-thumbnail"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../image/slider1.png')} class="img-thumbnail"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../image/slider1.png')} class="img-thumbnail"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </div>
      </Layout>
 
  )
}
export default home