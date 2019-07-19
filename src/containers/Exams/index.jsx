import React, {Component} from 'react';
import {Col, Container, Row} from 'reactstrap';
import Card from './components/Card';
import Stats from './components/Stats';
import DiagramContainer from '../../shared/components/DiagramContainer';
import diagram from './components/diagram.png';
import Loader from './components/Loader';

class Exams extends Component {
  constructor (props) {
    super (props);
    this.state = {
      loading: false,
      examGenerated: false,
    };
  }
  generateExam = () => {
    this.setState ({loading: true});
    setTimeout (() => {
      this.setState ({loading: false, examGenerated: true});
    }, 1000);
  };
  cancelExam = () => {
    this.setState ({examGenerated: false});
  };
  startExam = () => {
    this.props.history.push ('/exam-room/4');
  };
  render () {
    const {loading, examGenerated} = this.state;
    return (
      <Container className="dashboard">
        <Row>
          <Col md={4}>
            <Card header="Exam Questions">
              <p>
                Full typical exams so that you can have an exam experience. To get more of these exams per week
              </p>
              <button className="btn btn-danger mt-4 btn-rounded rounded round">
                Upgrade to Pro
              </button>
            </Card>
          </Col>
          <Col md={8}>
            {!examGenerated
              ? <Card className="card-shadow text-center" header={<Stats />}>
                  {loading
                    ? <Loader />
                    : <React.Fragment>
                        <DiagramContainer src={diagram} />
                        <h5 className="text-secondary text-center">
                          Clicking
                          {' '}
                          <em><b>"Start Exam"</b></em>
                          , will generate an new exam for you
                        </h5>

                        <div
                          className="btn-group mt-4 text-center"
                          style={{width: '100%'}}
                        >
                          <button
                            onClick={this.generateExam}
                            className="btn btn-primary"
                          >
                            Start Exam
                          </button>
                        </div>
                      </React.Fragment>}
                </Card>
              : <Card>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      height: '20em',
                    }}
                  >
                    <h1>Exam is ready  get started</h1>
                    <p className="text-muted">
                      <b className="text-primary">NOTE : </b>
                      {' '}
                      select the answer of your choice by
                      {' '}
                      <b>clicking</b>
                      {' '}
                      the  multiple choice letter
                    </p>
                    <div className="">
                      <button
                        onClick={this.startExam}
                        className="btn mt-4 btn-primary"
                      >
                        Get Started
                      </button>
                      <button
                        onClick={this.cancelExam}
                        className="btn mt-4 btn-secondary"
                      >
                        Not Now
                      </button>
                    </div>
                  </div>
                </Card>}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Exams;
