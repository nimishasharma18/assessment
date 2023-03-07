
//style
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './assetDisplay.scss'

const AssetDisplay = () => {
  return (
    <Row className="bitcoin-details">
      <Col span={3} />
      <Col span={3} >
        <p className='asset-label'>
          Market Cap
        </p>
        <p className="asset-values">
          <span className='currency'>$</span>
          <span className='market-value'>1.22T</span>
        </p>
      </Col>
      <Col span={3} >
        <p className='asset-label'>
          Market Cap
        </p>
        <p className="asset-values">
          <span className='currency'>$</span>
          <span className='market-value'>1.22T</span>
        </p>
      </Col>
      <Col span={3} >
        <p className='asset-label'>
          Market Cap
        </p>
        <p className="asset-values">
          <span className='currency'>$</span>
          <span className='market-value'>1.22T</span>
        </p>
      </Col>
      <Col span={3} >
        <p className='asset-label'>
          Market Cap
        </p>
        <p className="asset-values">
          <span className='currency'>$</span>
          <span className='market-value'>1.22T</span>
        </p>
      </Col>
      <Col span={3} >
        <p className='asset-label'>
          Market Cap
        </p>
        <p className="asset-values">
          <span className='currency'>$</span>
          <span className='market-value'>1.22T</span>
        </p>
      </Col>
      <Col span={3} >
        <p className='asset-label'>
          Market Cap
        </p>
        <p className="asset-values">
          <span className='currency'>$</span>
          <span className='market-value'>1.22T</span>
        </p>
      </Col>
      <Col span={3} />
    </Row>
  )
}
export default AssetDisplay;