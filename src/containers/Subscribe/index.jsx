import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import SubscribeCard from './components/SubscribeCard';

const Subscribe = () => (
  <Container className="dashboard">
    <Row className="justify-content-center">
      <SubscribeCard />
    </Row>
  </Container>
);

export default Subscribe;
