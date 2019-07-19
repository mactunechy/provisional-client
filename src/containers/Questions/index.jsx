import React, {Component} from 'react';
import {Col, Container, Row} from 'reactstrap';
import Card from './components/Card';
import Stats from './components/Stats';
import QuestionsList from './components/QuestionsList';
import QuestionsDetails from './components/QuestionDetails';
import PropTypes from 'prop-types';

//Redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getCurrentQuestion, getQuestions} from '../../redux/actions/questions';

class Notes extends Component {
  constructor (props) {
    super (props);
    this.state = {
      currentTopic: null,
    };
  }
  static propTypes = {
    questionsList: PropTypes.arrayOf (PropTypes.object).isRequired,
    currentQuestion: PropTypes.object,
    topics: PropTypes.arrayOf (PropTypes.object).isRequired,
  };
  getTopic = topic => {
    const {questionsList, getQuestions} = this.props;
    const newQuestionsList = questionsList.filter (
      question => question.topic.property === topic.property
    );
    getQuestions (newQuestionsList);
    this.setState ({currentTopic: topic});
  };
  resetNotes = () => {
    //const {get} = objectToDestruct
  };

  render () {
    const {currentQuestion, topics} = this.props;
    const {currentTopic} = this.state;
    return (
      <Container className="dashboard">
        <Row>
          <Col md={4}>
            <Card header="Exam Questions">
              <p>
                A list of all typical Exam questions that you will see i a provisional exam. Get more practise questions
              </p>
              <button className="btn btn-danger mt-4 btn-rounded rounded round">
                Upgrade to Pro
              </button>
            </Card>
            <Card header="Topics">
              <ul className="list-group list-unstyled">
                {topics &&
                  topics.map ((topic, idx) => (
                    <li key={idx} className="nav-link">
                      <span
                        onClick={() => this.getTopic (topic)}
                        className="text-primary"
                      >
                        {' '}{topic.label}
                      </span>
                      <span className="float-right text-dark">
                        {topic.numberOfNotes}+
                      </span>

                    </li>
                  ))}

              </ul>
            </Card>
          </Col>
          <Col md={8}>
            {currentQuestion
              ? <QuestionsDetails />
              : <Card className="card-shadow" header={<Stats />}>
                  {currentTopic &&
                    <p className="mb-4">
                      showing questions of <em>"{currentTopic.label}"</em>
                    </p>}
                  <QuestionsList />
                </Card>}
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    questionsList: state.questions.questionsList,
    currentQuestion: state.questions.currentQuestion,
    topics: state.notes.topics,
  };
};

const mapDispatchToprops = dispatch =>
  bindActionCreators (
    {
      getCurrentQuestion,
      getQuestions,
    },
    dispatch
  );

export default connect (mapStateToProps, mapDispatchToprops) (Notes);
