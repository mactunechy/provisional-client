import React from 'react';
import { CardBody, Col } from 'reactstrap';
import './styles.css'
const DashCard = props => (
  <Col md={12}>
      <CardBody className="p-2 dash-card">
        <div className="row">
          <div className="col-5" >
            <img src={props.icon} alt=""/>
          </div>
          <div className="col-7 my-auto ">
            <h4 className="bold-text">{props.header}</h4>
            <h4 className="subhead">{props.sub}</h4>
            <h3 className="float-right text-success mt-4 mr-3" style={{fontSize:'3em'}}>{props.total}+</h3>
          </div>
          
        </div>
      </CardBody>
  </Col>
);

export default DashCard;
