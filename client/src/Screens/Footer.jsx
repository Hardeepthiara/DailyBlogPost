import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
          
        <div className="row">
          <div className="footer__social mt-4">
            <Link
              target="_blank"
              to="#"
            >
            <img width="40"  src="https://img.icons8.com/fluency/48/facebook-new.png" alt="facebook-new"/>               
            </Link>
            <Link
              target="_blank"
              to="#"
            >
              <img width="40"  src="https://img.icons8.com/fluency/48/twitterx--v1.png" alt="twitterx--v1"/>
            </Link>
            <Link
              target="_blank"
              to="#"
            >
              <img width="40"  src="https://img.icons8.com/fluency/48/youtube-play.png" alt="youtube-play"/>
            </Link>
            <Link
              target="_blank"
              to="#"
            >
              <img width="40"  src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new"/>
            </Link>
            <Link
              target="_blank"
              to="#"
            >
            <img width="40"  src="https://img.icons8.com/fluency/48/pinterest.png" alt="pinterest"/>                </Link>
          </div></div>
        <Row>
          <Col className="text-center mt-3">
            <p>&copy; 2024 Daily Blog Post. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
