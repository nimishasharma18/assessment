import React from 'react';
import {  Col, Row } from 'react-bootstrap'

//components
import Header from '../src/components/header/Header';
import Footer from '../src/components/footer/Footer';
import DisplayTable from '../src/components/displayTable/DisplayTable';
import AssetDisplay from '../src/components/assetDisplay/AssetDisplay';

//styles
import './landingPage.scss'

//iccons
import { ArrowRightOutlined,  } from '@ant-design/icons';


const LandingPage = () => {
  return (
    <><Row>
      <Col className='header' span={24}>
        <img src="https://coincap.io/static/logos/ss-mark-white.svg" />
        <span>Buy, sell, &amp; swap your favorite assets. No KYC. No added fees. Decentralized.</span>
        <ArrowRightOutlined />
      </Col>
    </Row>
      <Header />
      <AssetDisplay />
      <DisplayTable />
     <Footer/>
    </>
  )
}

export default LandingPage;
