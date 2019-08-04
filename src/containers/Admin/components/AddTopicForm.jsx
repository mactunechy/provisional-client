import React, {Component} from 'react';
import TopicService from '../../../services/Topics';
import FormLoader from '../../../shared/components/FormLoader';

const topicService = new TopicService ();

export class AddNotesForm extends Component {
  constructor (props) {
    super (props);
    this.state = {
      property: '',
      label: '',
      loading : false
    };
  }
  handleSumbit = e => {
    e.preventDefault ();
    this.setState ({loading: true});
    let {
      property,
      label,

    } = this.state;
    property = property.trim().replace(" ",'_')
    topicService.create({label,property}).then((result) => {
        this.setState({loading : false })
        console.log(result)
    }).catch((err) => {
        
        this.setState({loading : false })
        console.log(err)
    });

  };
    handleChange = e => {
    this.setState ({[e.target.name]: e.target.value});
  };
  render () {
    const {
      property,
      label,
      loading
    } = this.state;
    return (
      <form className="form" onSubmit={this.handleSumbit}>
        <div className="form__form-group">
          <span className="form__form-group-label">Label</span>
          <b className="text-danger" style={{fontSize: '1.2em'}}> *</b>

          <div className="">
            <input
              onChange={this.handleChange}
              required
              value={label}
              className="custom-form-control"
              name="label"
              placeholder="....."
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">Property</span>
          <b className="text-danger" style={{fontSize: '1.2em'}}> *</b>
          <small className="float-right text-warning">
            not spaces alowed
          </small>
          <div className="">
            <input
              onChange={this.handleChange}
              required
              value={property}
              className="custom-form-control"
              name="property"
              placeholder="....."
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
              Save Topic
            </button>}

      </form>
    );
  }
}

export default AddNotesForm;
