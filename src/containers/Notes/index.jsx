import React, {Component} from 'react';
import {Col, Container, Row} from 'reactstrap';
import Card from './components/Card';
import NotesList from './components/NotesList';
import NotesDetails from './components/NotesDetails';
import PropTypes from 'prop-types';
import NotesService from '../../services/Notes';
import TopicsService from '../../services/Topics';
//Redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getCurrentNotes, getNotesList} from '../../redux/actions/notes';
import {getTopics} from '../../redux/actions/topics';

const notesService = new NotesService ();
const topicService = new TopicsService ();

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
  componentDidMount () {
    this.fetchNotes ();
    this.fetchTopics ();
  }
  fetchNotes = () => {
    const {getNotesList} = this.props;
    return notesService
      .fetchAll ()
      .then (res => {
        console.log ('res', res);
        getNotesList (res.content);
        return res.content;
      })
      .catch (err => {
        console.log ('err', err);
      });
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
  fetchTopics = () => {
    const {getTopics} = this.props;
    topicService
      .fetchAll ()
      .then (res => {
        console.log ('res', res);
        getTopics (res.content);
      })
      .catch (err => {
        console.log ('err', err);
      });
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
            {currentNotes
              ? <NotesDetails />
              : <Card
                  className="card-shadow"
                  header={
                    <h3>
                      Notes Archive <b />
                      <hr className="mt-2 mb-3" />
                    </h3>
                  }
                >
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
    topics: state.topics.topics,
  };
};

const mapDispatchToprops = dispatch =>
  bindActionCreators (
    {
      getCurrentNotes,
      getTopics,
      getNotesList,
    },
    dispatch
  );

export default connect (mapStateToProps, mapDispatchToprops) (Notes);
