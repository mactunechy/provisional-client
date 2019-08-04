import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class ProfileForm extends PureComponent {
  static propTypes = {
    user: PropTypes.object.isRequired,
  };

  constructor () {
    super ();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
    };
  }
  componentDidMount () {
    const {user} = this.props;
    this.setState ({...user});
  }
  handleSubmit = e => {};

  render () {
    const {firstName, lastName, email} = this.state;

    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="form__form-group">
          <span className="form__form-group-label">First Name</span>
          <div className="form__form-group-field">
            <input
              name="firstName"
              component="input"
              value={firstName}
              type="text"
              placeholder="......"
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">Last Name</span>
          <div className="form__form-group-field">
            <input
              name="lastName"
              component="input"
              type="text"
              value={lastName}
              placeholder="....."
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">Email</span>
          <div className="form__form-group-field">
            <input
              name="email"
              component="input"
              type="email"
              email={email}
              placeholder="....."
            />
          </div>
        </div>

        <button
          className="btn btn-primary mt-4 account__btn account__btn--small"
          type="submit"
        >
          Update Your Details
        </button>
      </form>
    );
  }
}

export default ProfileForm;
