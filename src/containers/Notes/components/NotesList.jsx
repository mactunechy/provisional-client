import React, {Component} from 'react';
import './style.css';

import {Card} from 'reactstrap';

//Redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getCurrentNotes, getNotesList} from '../../../redux/actions/notes';

class NotesList extends Component {
  render () {
    let {notesList: notes} = this.props;
    return (
      <React.Fragment>
        {notes &&
          notes.length > 0 &&
          notes.map (note => (
            <Card key={note.id} className="border  notes-card mb-3 card-body">
              <p>
                {note.description.substring (0, 100) + '...'}
                <span className="float-right text-primary">
                  {note.topic.label}
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
    notesList: state.notes.notesList,
  };
};

const mapDispatchToprops = dispatch =>
  bindActionCreators (
    {
      getCurrentNotes,
      getNotesList,
    },
    dispatch
  );

export default connect (mapStateToProps, mapDispatchToprops) (NotesList);
