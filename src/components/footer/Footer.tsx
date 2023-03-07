import React from "react";
import { Col, Row } from "react-bootstrap";

//styles
import './footer.scss'
//icons
import { FacebookOutlined, TwitterOutlined } from "@ant-design/icons";
const Footer = () => {
  return (
    <div className='footer'>
      <Row>
        <Col lg="3">
          <p className='footer-head'>COINCAP.IO</p>

          <a className='footer-links'>Methodology</a>
          <a className='footer-links'>Support</a>
          <a className='footer-links'>Our API</a>
          <a className='footer-links'>Rate Comparison</a>
          <a className='footer-links'>Careers</a>

        </Col>
        <Col lg="3">
          <p className='footer-head'>LEGALS</p>

          <a className='footer-links'>Terms Of Service</a>
          <a className='footer-links'>Privacy Policy</a>
          <p className='footer-head mt-2'>DISCLAIMER</p>
          <a className='footer-links'>Neither ShapeShift AG nor CoinCap are in any way associated with CoinMarketCap, LLC or any of its goods and services.</a>
        </Col>
        <Col lg="3">
          <p className='footer-head'>FOLLOW US</p>
          <div className='d-flex icons'>
            <TwitterOutlined />&nbsp;
            <FacebookOutlined />
          </div>
        </Col>
        <Col lg="3">
          <p className='footer-head'>COINCAP APP AVAILABLE ON</p>
          <div className="d-flex flex-column mx-5">
            <a>
            <img src ="https://coincap.io/static/images/stores/google_play.svg" ></img>
            </a>
       <a> <img src ="https://coincap.io/static/images/stores/apple_store.svg" ></img></a>
       
          </div>
        </Col>
      </Row>
    </div>
  )
}
export default Footer;