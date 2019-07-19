import React, {Component} from 'react';
import './style.css';

import {Card} from 'reactstrap';

//Redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  getQuestions,
  getCurrentQuestion,
} from '../../../redux/actions/questions';

class NotesList extends Component {
  render () {
    let {questionsList, getCurrentQuestion} = this.props;
    return (
      <React.Fragment>
        <h4 className="mb-3">Questions</h4>
        {questionsList &&
          questionsList.length > 0 &&
          questionsList.map (que => (
            <Card
              onClick={() => getCurrentQuestion (que)}
              key={que.id}
              className="border  notes-card mb-3 card-body"
            >
              <p>
                {que.description.substring (0, 100) + '...'}
                <span className="float-right text-primary">
                  {que.topic.label}
                </span>
              </p>
            </Card>
          ))}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    questionsList: state.questions.questionsList,
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

export default connect (mapStateToProps, mapDispatchToprops) (NotesList);
