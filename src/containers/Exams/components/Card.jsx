import React from 'react';
import {Card, CardBody, Col, CardHeader} from 'reactstrap';

const ExampleCard = props => (
  <Col md={12}>
    <Card className="">
      <CardHeader className="">
        {props.header}
      </CardHeader>
      <CardBody className="">
        {props.children}
      </CardBody>
    </Card>
  </Col>
);

export default ExampleCard;
