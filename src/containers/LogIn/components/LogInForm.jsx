import React, {PureComponent} from 'react';
import {Field, reduxForm} from 'redux-form';
import EyeIcon from 'mdi-react/EyeIcon';
import KeyVariantIcon from 'mdi-react/KeyVariantIcon';
import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import FormLoader from '../../../shared/components/FormLoader';

class LogInForm extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
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
    const {handleSubmit, loading} = this.props;
    const {showPassword} = this.state;

    return (
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__form-group">
          <span className="form__form-group-label">Email</span>
          <div className="form__form-group-field">
            <div className="form__form-group-icon">
              <AccountOutlineIcon />
            </div>
            <Field
              required
              name="email"
              component="input"
              type="email"
              placeholder="Name"
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">Password</span>
          <div className="form__form-group-field">
            <div className="form__form-group-icon">
              <KeyVariantIcon />
            </div>
            <Field
              name="password"
              component="input"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              required
            />
            <button
              className={`form__form-group-button${showPassword ? ' active' : ''}`}
              onClick={e => this.showPassword (e)}
              type="button"
            >
              <EyeIcon />
            </button>
          </div>
          <div className="account__forgot-password">
            <a href="/">Forgot a password?</a>
          </div>
        </div>
        {loading
          ? <FormLoader />
          : <button
              type="submit"
              className="btn btn-primary account__btn account__btn--small"
            >
              Sign In
            </button>}
        <Link
          className="btn btn-outline-primary account__btn account__btn--small"
          to="/log_in"
        >
          Create Account
        </Link>
      </form>
    );
  }
}

export default reduxForm ({
  form: 'log_in_form',
}) (LogInForm);
