import React, {Component} from 'react';
import './style.css';

import {Card} from 'reactstrap';

//Redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getExamsList} from '../../../redux/actions/exams';

class NotesList extends Component {
  render () {
    let {examsList} = this.props;
    return (
      <React.Fragment>
        {examsList &&
          examsList.length > 0 &&
          examsList.map (que => (
            <Card key={que.id} className="border  notes-card mb-3 card-body">
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
    examsList: state.exams.examsList,
  };
};

const mapDispatchToprops = dispatch =>
  bindActionCreators (
    {
      getExamsList,
    },
    dispatch
  );

export default connect (mapStateToProps, mapDispatchToprops) (NotesList);
