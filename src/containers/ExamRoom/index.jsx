import React, {Component} from 'react';
import {Col, Row, Card, Table} from 'reactstrap';
import {Alert} from 'react-bootstrap';
import ExamQuestion from './components/ExamQuestion';
import {Link} from 'react-router-dom';
//Redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getCurrentExam} from '../../redux/actions/exams';
import DiagramContainer from '../../shared/components/DiagramContainer';
import diagram from './components/diagram.png';

export class ExamRoom extends Component {
  render () {
    const {currentExam} = this.props;
    console.log ('currentExam', currentExam.grade);
    return (
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          {currentExam.completed
            ? <Card className="card-shadow text-center">
                <DiagramContainer src={diagram} />
                <Alert
                  variant={currentExam.grade === 'pass' ? 'success' : 'danger'}
                >
                  {currentExam.grade === 'pass'
                    ? 'Congratulations :), you have passed. Keep it Up!!'
                    : 'Sorry, You have failed :(, You can always try again later'}
                </Alert>
                <div className="table-responsive bg-white p-3">
                  <Table bordered responsive>
                    <thead>
                      <tr>
                        <th className="text-left">
                          #
                        </th>
                        <th className="text-left">
                          Score
                        </th>
                        <th className="text-left">
                          Percentage
                        </th>
                        <th className="text-left">
                          Total
                        </th>
                        <th className="text-left">
                          Grade
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-left">
                          {currentExam.id}
                        </td>
                        <td className="text-left">
                          {currentExam.score}
                        </td>
                        <td className="text-left">
                          {currentExam.percentage}%
                        </td>
                        <td className="text-left">
                          {currentExam.questions.length}
                        </td>
                        <td
                          className={`text-left text-${currentExam.grade === 'pass' ? 'success' : 'danger'}`}
                        >
                          {currentExam.grade}
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  <Link className="btn btn-secondary float-right" to="/exams">
                    Done
                  </Link>
                </div>
              </Card>
            : <ExamQuestion />}
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentExam: state.exams.currentExam,
  };
};

const mapDispatchToprops = dispatch =>
  bindActionCreators (
    {
      getCurrentExam,
    },
    dispatch
  );

export default connect (mapStateToProps, mapDispatchToprops) (ExamRoom);
