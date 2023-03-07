import { CaretDownOutlined, SearchOutlined, SettingOutlined } from "@ant-design/icons";
import { Col, Row } from "react-bootstrap";

//style
import './header.scss'

const Header = () => {
    return (
        <Row className='navigation-tabs' >
            <Col lg={2} className="coin-nav">
                Coins
            </Col>
            <Col lg={1} className="exchange-nav">
                Exchanges
            </Col>
            <Col lg={1} className="swap-nav">
                swap
            </Col>
            <Col lg={3} className="brand-logo">
                <img src="https://coincap.io/static/logos/black.svg" />
            </Col>
            <Col lg={1}>

                <span >USD &nbsp;
                    <span  ><CaretDownOutlined /></span></span>
            </Col>
            <Col lg={1}>
            <span >English &nbsp;
                    <span  ><CaretDownOutlined /></span></span>
            </Col>
            <Col lg={1}>
                <SearchOutlined />
                   
            </Col>
            <Col lg={2}>
                <SettingOutlined />
            </Col>
        </Row>
    )
}
export default Header;