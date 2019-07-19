import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import DashCard from './components/DashCard'
import notesIcon from './components/images/notes.svg'
import questionsIcon from './components/images/questions.svg'
import examsIcon from './components/images/exams.svg'
import { NavLink } from 'react-router-dom'

const Dashboard = () => (
  <Container className="dashboard">
    <Row>
      <Col md={12} className="" >
        <h2 className="page-title ml-3" style={{display:'inline-block'}} >
          Dashboard
        </h2>
        <h4 className="float-right mr-3" >membership : <small className="badge badge-warning"><i className="fa fa-star"></i> Free</small> </h4>

      </Col>
    </Row>
    <Row>
      <Col md={12} lg={4} className="mb-4">
      <NavLink 
        to='/notes'
      >
        <DashCard
       icon={notesIcon}
       header="Typical Notes"
       sub="brief description of a concept"
       total={23}
       />
      </NavLink>
      </Col>
      <Col md={12} lg={4} className="mb-4" >
      <NavLink
      to='/questions'
      >
        <DashCard
       icon={questionsIcon}
       header="Exam Questions"
       sub="typical exam questions"
       total={45}
         />
      </NavLink>
      </Col>
      <Col md={12} lg={4} className="mb-4" >
      <NavLink
      to='/exams'
      >
        <DashCard
      icon={examsIcon}
      header="Complete Exams"
      sub="25 question tests"
      total={10}
      />
      </NavLink>
      </Col>
    </Row>
  </Container>
);

export default Dashboard;
