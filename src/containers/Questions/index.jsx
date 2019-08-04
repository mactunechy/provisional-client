import React, {Component} from 'react';
import {Col, Container, Row} from 'reactstrap';
import Card from './components/Card';
import Stats from './components/Stats';
import QuestionsList from './components/QuestionsList';
import QuestionsDetails from './components/QuestionDetails';
import PropTypes from 'prop-types';
import QuestionsService from '../../services/Questions';
import TopicsService from '../../services/Topics';
//Redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getCurrentQuestion, getQuestions} from '../../redux/actions/questions';
import {getTopics} from '../../redux/actions/topics';

const queService = new QuestionsService ();
const topicService = new TopicsService ();

class Questions extends Component {
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
  componentDidMount () {
    this.fetchQuestions ();
    this.fetchTopics ();
  }
  fetchQuestions = () => {
    const {getQuestions} = this.props;
    return queService
      .fetchAll ()
      .then (res => {
        getQuestions (res.content);
        return res.content;
      })
      .catch (err => {
        console.log ('err', err);
      });
  };
  fetchTopics = () => {
    const {getTopics} = this.props;
    topicService
      .fetchAll ()
      .then (res => {
        getTopics (res.content);
      })
      .catch (err => {
        console.log ('err', err);
      });
  };

  getTopic = async topic => {
    const {getQuestions} = this.props;
    const questionsList = await this.fetchQuestions ();
    const newQuestionsList = questionsList.filter (
      question => question.topic.property === topic.property
    );
    getQuestions (newQuestionsList);
    this.setState ({currentTopic: topic});
  };
  resetNotes = () => {
    this.fetchQuestions ();
    this.setState ({currentTopic: null});
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
                  topics.length > 0 &&
                  topics.map (topic => (
                    <li
                      key={topic._id}
                      onClick={() => this.getTopic (topic)}
                      className="text-primary nav-link custom-nav-link"
                    >
                      {topic.label}
                      <span className="float-right text-dark">
                        {topic.questions.length}+
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
                      <span
                        className="btn-link ml-2 custom-nav-link "
                        onClick={() => this.resetNotes ()}
                      >
                        reset
                      </span>
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
    topics: state.topics.topics,
  };
};

const mapDispatchToprops = dispatch =>
  bindActionCreators (
    {
      getCurrentQuestion,
      getQuestions,
      getTopics,
    },
    dispatch
  );

export default connect (mapStateToProps, mapDispatchToprops) (Questions);
