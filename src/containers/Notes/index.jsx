import React, {Component} from 'react';
import {Col, Container, Row} from 'reactstrap';
import Card from './components/Card';
import SearchForm from './components/SearchForm';
import NotesList from './components/NotesList';
import NotesDetails from './components/NotesDetails';
import PropTypes from 'prop-types';

//Redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getCurrentNotes, getNotesList} from '../../redux/actions/notes';

class Notes extends Component {
  constructor (props) {
    super (props);
    this.state = {
      currentTopic: null,
    };
  }
  static propTypes = {
    notesList: PropTypes.arrayOf (PropTypes.object).isRequired,
    currentNotes: PropTypes.object,
    topics: PropTypes.arrayOf (PropTypes.object).isRequired,
  };
  getTopic = topic => {
    const {notesList, getNotesList} = this.props;
    const newNotesList = notesList.filter (
      notes => notes.topic.property === topic.property
    );
    getNotesList (newNotesList);
    this.setState ({currentTopic: topic});
  };
  resetNotes = () => {
    //const {get} = objectToDestruct
  };

  render () {
    const {currentNotes, topics} = this.props;
    const {currentTopic} = this.state;
    return (
      <Container className="dashboard">
        <Row>
          <Col md={4}>
            <Card header="Typical Notes">
              <p>
                A list of all typical notes that will help you understand the basic concepts of road safety
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
            {currentNotes
              ? <NotesDetails />
              : <Card className="card-shadow" header={<SearchForm />}>
                  {currentTopic &&
                    <p className="mb-4">
                      showing notes of <em>"{currentTopic.label}"</em>
                    </p>}
                  <NotesList />
                </Card>}
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    notesList: state.notes.notesList,
    currentNotes: state.notes.currentNotes,
    topics: state.notes.topics,
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

export default connect (mapStateToProps, mapDispatchToprops) (Notes);
