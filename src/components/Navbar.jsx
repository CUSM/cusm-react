import React from "react";
import logo from '../images/logo.png'
import { Row, Col, Typography } from "antd";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
const { Title } = Typography;


function Navbar() {
  return (
    <div>
      <Row >
        <Col span={20} offset={2}>
          <div>
          <Row>
            <Col flex={4}>
            <img src={logo} alt="logo"/>
            </Col>
            <Col flex={2}>
              <Row className="ln-12">
                <Col flex={1}>
                  <Title level={4}>
                  <Link to="/">Home</Link>
                  </Title>
                </Col>
                <Col flex={1}>
                  <Title level={4}>
                  <Link to="/notes">Notes</Link>
                  </Title>
                </Col>
                <Col flex={1}>
                  <Title level={4}>
                  <Link to="/feedback">Feedback</Link>
                  </Title>
                </Col>
                <Col flex={1}>
                  <Title level={4}>
                  <Link to="upload">Upload</Link>
                  </Title>
                </Col>
              </Row>
            </Col>
          </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Navbar;
