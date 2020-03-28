import React from "react";
import {Row,Col} from 'antd'

function Component(props) {
  return (
    <Row className={props.className}>
      <Col span={21} offset={2}>
      {props.children}
      </Col>
    </Row>
  );
}

export default Component