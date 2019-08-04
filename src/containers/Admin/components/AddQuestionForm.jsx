import React, {Component} from 'react';
import QuestionsService from '../../../services/Questions';
import TopicsService from '../../../services/Topics';
import FormLoader from '../../../shared/components/FormLoader';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getTopics} from '../../../redux/actions/topics';

const questionsService = new QuestionsService ();
const topicService = new TopicsService ();

export class AddQuestionForm extends Component {
  constructor (props) {
    super (props);
    this.state = {
      diagram: '',
      description: '',
      correctAnswer_description: '',
      correctAnswer_letter: 'A',
      A: '',
      B: '',
      loading: false,
      topic: '',
    };
  }
  componentDidMount () {
    const {getTopics} = this.props;
    topicService
      .fetchAll ()
      .then (res => {
        console.log ('result', res);
        getTopics (res.content);
      })
      .catch (err => {
        console.log ('err', err);
      });
  }
  handleSumbit = e => {
    e.preventDefault ();
    this.setState ({loading: true});
    const {
      diagram,
      description,
      correctAnswer_description,
      correctAnswer_letter,
      A,
      B,
      C,
      topic,
    } = this.state;
    const example = {
      description,
      correctAnswer: {
        letter: correctAnswer_letter,
        description: correctAnswer_description,
      },
      multipleChoice: [
        {
          letter: 'A',
          description: A,
        },
        {
          letter: 'B',
          description: B,
        },
        {
          letter: 'C',
          description: C,
        },
      ],
    };
    if (diagram.trim ().length > 0) example.diagram = diagram;
    if (topic.trim ().length > 0) example.topic = topic;
    questionsService
      .create (example)
      .then (res => {
        this.setState ({loading: false});
        console.log ('res', res);
      })
      .catch (err => {
        this.setState ({loading: false});
        console.log ('err', err);
      });
  };
  handleChange = e => {
    this.setState ({[e.target.name]: e.target.value});
  };
  render () {
    const {
      loading,
      diagram,
      description,
      correctAnswer_description,
      correctAnswer_letter,
      A,
      B,
      C,
      topic,
    } = this.state;
    const {topics} = this.props;
    return (
      <form className="form" onSubmit={this.handleSumbit}>
        <div className="form__form-group">
          <span className="form__form-group-label">Description</span>
          <b className="text-danger" style={{fontSize: '1.2em'}}> *</b>

          <div className="">
            <textarea
              onChange={this.handleChange}
              required
              value={description}
              className="custom-form-control"
              name="description"
              rows={4}
              placeholder="....."
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">Topic</span>
          <b className="text-danger" style={{fontSize: '1.2em'}}> *</b>

          <div className="">
            {topics &&
              topics.length > 0 &&
              <select
                className="form-control custom-form-control"
                required
                name="topic"
                onChange={this.handleChange}
                value={topic}
                style={{fontSize: '1em'}}
              >
                <option>Select Topic</option>
                {topics.map (topic => (
                  <option key={topic._id} value={topic._id}>
                    {topic.label}
                  </option>
                ))}
              </select>}
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">Diagram</span>
          <small className="float-right text-primary">
            optional additional diagram
          </small>
          <div className="form__form-group-field">
            <input
              onChange={this.handleChange}
              className="custom-form-control"
              name="notes_diagram"
              type="file"
              value={diagram}
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">Multiple Choices</span>
          <b className="text-danger" style={{fontSize: '1.2em'}}> *</b>
          <small className="float-right text-primary">
            possible answer choices
          </small>
          <div className="form__form-group-field mb-3">
            <div className="form__form-group-icon px-3">
              A
            </div>
            <input
              value={A}
              onChange={this.handleChange}
              className="custom-form-control"
              name="A"
              type="text"
              placeholder="...."
            />
          </div>
          <div className="form__form-group-field mb-3">
            <div className="form__form-group-icon px-3">
              B
            </div>
            <input
              value={B}
              onChange={this.handleChange}
              name="B"
              component="input"
              type="text"
              placeholder="...."
              className="custom-form-control"
            />
          </div>
          <div className="form__form-group-field mb-3">
            <div className="form__form-group-icon px-3">
              C
            </div>
            <input
              value={C}
              onChange={this.handleChange}
              name="C"
              type="text"
              placeholder="...."
              className="custom-form-control"
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">Correct Answer</span>
          <b className="text-danger" style={{fontSize: '1.2em'}}> *</b>
          <div className="form__form-group-field">
            <div className="form__form-group-icon p-0 ">
              <select
                onChange={this.handleChange}
                name="correctAnswer_letter"
                value={correctAnswer_letter}
                className="form__form-group-icon"
              >
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
            </div>
            <input
              onChange={this.handleChange}
              name="correctAnswer_description"
              type="text"
              value={correctAnswer_description}
              placeholder="description..."
              className="custom-form-control"
            />
          </div>
        </div>
        {loading
          ? <FormLoader />
          : <button
              type="submit"
              className="btn btn-primary account__btn account__btn--small mt-4"
              to="/pages/one"
            >
              Save Notes
            </button>}

      </form>
    );
  }
}

const mapStateToProps = state => ({
  topics: state.topics.topics,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators (
    {
      getTopics,
    },
    dispatch
  );

export default connect (mapStateToProps, mapDispatchToProps) (AddQuestionForm);
