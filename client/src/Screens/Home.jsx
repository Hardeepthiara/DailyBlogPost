import React from 'react';
import NavigationBar from "./NavigationBar";
import Footer from './Footer';
import { Carousel, Card, Col, Row } from 'react-bootstrap';
import '../assets/Home.css'; 

function Home() {
  return (
    <div>
      <NavigationBar />
      <div className="button-container">
      <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/logo/1.jpg"
          width="800px"
          height="535px"
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
          src="/logo/2.jpg"
          width="800px"
          height="535px"
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
          src="/logo/3.jpg"
          width="800px"
          height="535px"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    <div className="button-container">
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src="/logo/4.jpg" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row></div>
    <Footer/>
    </div>
  );
}

export default Home;
