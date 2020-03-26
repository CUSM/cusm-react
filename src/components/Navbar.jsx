import React, { Component } from "react";
import logo from "../images/logo.png";
import { Row, Col, Typography, Button, Drawer} from "antd";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import {MenuOutlined} from '@ant-design/icons'
const { Title } = Typography;


class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      name: "Souvik",
      visible: false
    };
  }

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div>
        <Drawer
          placement="left"
          visible={this.state.visible}
          closable={false}
          onClose={this.onClose}
        >
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/notes">Notes</Link>
          </p>
          <p>
            <Link to="/feedback">Feedback</Link>
          </p>
          <p>
            <Link to="/upload">Upload</Link>
          </p>
        </Drawer>
        <Row>
          <Col span={21} offset={2}>
            <div>
              <Row>
                <Col flex={4}>
                  <img className="brnd-img" src={logo} alt="logo" />
                </Col>
                <Col>
                  <h1><MenuOutlined onClick={this.showDrawer} className="smbtn" /></h1>
                </Col>
                <Col flex={2} className="ln-12">
                  <Row className=" smlinks">
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
}

export default Navbar;
