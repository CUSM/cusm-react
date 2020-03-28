import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { Typography, Row, Col, Button } from "antd";
import Comp from "../components/Component";
//images
import banner1 from '../images/banner-image.jpg'
import banner2 from '../images/about-us.jpg'

const { Title, Text } = Typography;
const bannerStyle={
    "margin": "0 22px"
}

const bannerStyle2 ={
    "margin": "0 22px"
}

class Index extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Comp className="mt-6">
          <Row>
            <Col>
              <Title>Hey, There.</Title>
              <Text className="txt-size-30" strong>
                CUSM HERE
              </Text>
              <br />
              <Text className="txt-size-10 ">
                Study Material At Your Fingure Tips
              </Text>
              <Row className="mt-small">
                  <Col flex={1}>
                  <Button size="large" type="primary">Login</Button>
                  </Col>
                  <Col flex={5}>
                  <Button size="large">Sign Up</Button>
                  </Col>
              </Row>
            </Col>
            <Col>
            <img src={banner1} alt="" width="500px" style={bannerStyle}/>
            </Col>
          </Row>
        </Comp>

        <Comp>

            <Row>
                <Col>
                <img src={banner2} alt="" width="500px" style={bannerStyle2}/>
                </Col>

                <Col>
                <Title>AIM</Title>
                <Text>
                Our aim is to provide top-notch and high-quality <br/> study material at a faster pace to all the students currently <br/> studying in this university, without any hustle, free-of- cost.
                </Text>
                </Col>
            </Row>

        </Comp>
      </div>
    );
  }
}

export default Index;
