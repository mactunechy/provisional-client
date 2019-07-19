import React, {PureComponent} from 'react';
import {Field, reduxForm} from 'redux-form';
import EyeIcon from 'mdi-react/EyeIcon';
import KeyVariantIcon from 'mdi-react/KeyVariantIcon';
import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import renderCheckBoxField from '../../../shared/components/form/CheckBox';

class LogInForm extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };

  constructor () {
    super ();
    this.state = {
      showPassword: false,
    };
  }

  showPassword = e => {
    e.preventDefault ();
    this.setState (prevState => ({showPassword: !prevState.showPassword}));
  };

  render () {
    const {handleSubmit} = this.props;
    const {showPassword} = this.state;

    return (
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__form-group">
          <span className="form__form-group-label">Username</span>
          <div className="form__form-group-field">
            <Field
              name="name"
              component="input"
              type="text"
              placeholder="Name"
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">Password</span>
          <div className="form__form-group-field">
            <Field
              name="password"
              component="input"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
            />
          </div>
        </div>

        <Link
          className="btn btn-primary mt-4 account__btn account__btn--small"
          to="/log_in"
        >
          Update Your Details
        </Link>
      </form>
    );
  }
}

export default reduxForm ({
  form: 'profileUpdateForm',
}) (LogInForm);
