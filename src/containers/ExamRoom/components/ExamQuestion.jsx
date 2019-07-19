import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import DiagramContainer from '../../../shared/components/DiagramContainer';
import Answer from '../../Questions/components/Answer';
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Row,
  Col,
  Container,
} from 'reactstrap';
import diagram from './diagram.png';

//Redux
import {setNextQuestion, examCompleted} from '../../../redux/actions/exams';
import {bindActionCreators} from 'redux';

const style = {
  description: {
    fontSize: '1.3em',
  },
  bordered: {
    border: 'solid #aaa 1px',
  },
};

class ExamQuestion extends Component {
  constructor (props) {
    super (props);
    this.state = {
      stopWatch: {
        seconds: 19,
        percent: 100,
        color: 'primary',
      },
      showAnswer: false,
      myAnswer: null,
      selectedAnswer: '',
      currentQueId: 0,
      correctMarks: 0,
    };
  }
  static propTypes = {
    currentExamQuestion: PropTypes.shape ({
      id: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      multipleChoice: PropTypes.arrayOf (
        PropTypes.shape ({
          letter: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
        })
      ),
      answer: PropTypes.shape ({
        letter: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }),
    }),
    currentExam: PropTypes.object.isRequired,
  };

  componentDidMount () {
    const {setNextQuestion, currentExam} = this.props;
    setNextQuestion (currentExam.questions[0]);
    setTimeout (() => {
      this.startStopWatch ();
    }, 1000);
  }
  resetStopWatch = () => {
    const stopWatch = {
      seconds: 19,
      percent: 100,
      color: 'primary',
    };
    this.setState ({stopWatch});
  };
  startStopWatch = () => {
    const {stopWatch} = this.state;

    const watch = setInterval (() => {
      if (stopWatch.percent <= 0) return this.markQuestion (true);
      if (stopWatch.seconds > 0) stopWatch.seconds--;
      stopWatch.percent -= 5;
      switch (stopWatch.percent) {
        case 75:
          stopWatch.color = 'success';
          break;
        case 50:
          stopWatch.color = 'warning';
          break;
        case 25:
          stopWatch.color = 'danger';
          break;
        default:
      }
      this.setState ({stopWatch});
    }, 1000);
    this.watch = watch;
  };
  collectResults = () => {
    console.log ('marking...');
    let {currentExam, examCompleted} = this.props;
    let PASS_MARK = 92;
    const {correctMarks} = this.state;
    const total = currentExam.questions.length;
    let percentage = correctMarks / total * 100;
    let grade = percentage >= PASS_MARK ? 'pass' : 'fail';
    const completeExam = {
      ...currentExam,
      percentage: percentage.toFixed (1),
      score: correctMarks,
      completed: true,
      grade,
    };
    return examCompleted (completeExam);
  };

  markQuestion = timedOut => {
    clearInterval (this.watch);
    let {selectedAnswer, currentQueId, correctMarks} = this.state;
    console.log ('currentQueId', currentQueId);
    const {currentExamQuestion, setNextQuestion, currentExam} = this.props;
    if (selectedAnswer === '' && !timedOut) return;
    let isCorrect = false;
    if (!timedOut)
      isCorrect = selectedAnswer === currentExamQuestion.answer.letter;
    if (isCorrect) correctMarks++;
    const myAnswer = {
      isCorrect,
      message: timedOut
        ? 'You ran out of time :('
        : isCorrect ? 'You got it correct :)' : 'You got wrong it wrong :(',
      className: isCorrect ? 'success' : 'danger',
    };

    this.setState ({myAnswer, correctMarks, showAnswer: true});
    setTimeout (() => {
      this.resetStopWatch ();
      console.log (currentQueId);
      this.setState ({
        myAnswer: null,
        showAnswer: false,
        selectedAnswer: '',
        currentQueId: currentQueId + 1,
      });
      if (currentQueId === currentExam.questions.length - 1)
        return this.collectResults ();
      else setNextQuestion (currentExam.questions[currentQueId + 1]);
      this.startStopWatch ();
    }, 3000);
  };
  render () {
    const {currentExamQuestion: currentQuestion} = this.props;
    const {stopWatch, showAnswer, myAnswer, selectedAnswer} = this.state;
    return (
      <Container>

        {currentQuestion &&
          <Row>
            <Answer
              myAnswer={myAnswer}
              correctAnswer={currentQuestion.answer}
              show={showAnswer}
              isExam={true}
            />
            <Card className="border-secondary">
              <CardHeader className="h4">
                <div className="progress-container progress-primary mb-3">
                  <h4 className="progress-badge mb-3">
                    Question {currentQuestion.id}
                    <span className={`float-right text-${stopWatch.color}`}>
                      {stopWatch.seconds}s
                    </span>
                  </h4>
                  <div className="progress bg-white" style={{height: 3}}>
                    <div
                      className={`progress-bar bg-${stopWatch.color}`}
                      role="progressbar"
                      aria-valuenow="60"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{width: `${stopWatch.percent}%`}}
                    />
                  </div>
                </div>

              </CardHeader>
              <CardBody>
                <DiagramContainer src={diagram} />
                <p style={style.description}>{currentQuestion.description}</p>
                <Row className="mt-3">
                  {currentQuestion.multipleChoice.map ((answer, idx) => (
                    <Col key={idx} sm={4}>
                      <h6>
                        {' '}
                        <button
                          style={{borderRadius: '50%'}}
                          className={
                            selectedAnswer === answer.letter
                              ? 'btn btn-primary btn-sm btn-icon px-2 m-0 py-0 rounded'
                              : 'btn btn-secondary btn-sm btn-icon px-2 m-0 py-0 rounded '
                          }
                          onClick={() =>
                            this.setState ({selectedAnswer: answer.letter})}
                        >
                          {answer.letter}
                        </button>
                        {' '}
                        :
                        {' '}
                        {answer.description}
                      </h6>
                    </Col>
                  ))}
                </Row>

                <hr className="mt-3" />
                <small className="text-muted float-left">
                  <span className="text-primary">NOTE : </span>
                  {' '}
                  select the answer of your choice by
                  {' '}
                  <em>clicking</em>
                  {' '}
                  the  multiple choice letter
                </small>
                <Button
                  className="btn-primary text-white mt-0 mb-0 float-right"
                  onClick={() => this.markQuestion ()}
                >
                  Submit
                </Button>
              </CardBody>

            </Card>
          </Row>}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  currentExamQuestion: state.exams.currentExamQuestion,
  currentExam: state.exams.currentExam,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators (
    {
      setNextQuestion,
      examCompleted,
    },
    dispatch
  );

export default connect (mapStateToProps, mapDispatchToProps) (ExamQuestion);
