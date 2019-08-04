import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import FacebookIcon from 'mdi-react/FacebookIcon';
import GooglePlusIcon from 'mdi-react/GooglePlusIcon';
import SignUpForm from './components/SignUpForm';
import {connect} from 'react-redux';
import Auth from '../../services/auth';
import {bindActionCreators} from 'redux';
import {userLogin} from '../../redux/actions/auth';

import UsersService from '../../services/Users';

const userService = new UsersService ();

class SignUp extends Component {
  constructor (props) {
    super (props);
    this.state = {
      loading: false,
    };
  }
  handleSubmit = values => {
    const {userLogin, history} = this.props;
    this.setState ({loading: true});
    userService
      .create (values)
      .then (() => {
        userService
          .login ({email: values.email, password: values.password})
          .then (res => {
            Auth.removeToken ();
            Auth.setToken (res.content.token);
            const tokenData = Auth.decodeToken ();
            userLogin (tokenData);
            history.push ('/dashboard');
          })
          .catch (err => {
            console.log ('err', err);
            this.setState ({loading: false});
          });
      })
      .catch (err => {
        console.log ('err', err);
        this.setState ({loading: false});
      });
  };
  render () {
    const {loading} = this.state;
    return (
      <div className="account">
        <div className="account__wrapper">
          <div className="account__card">
            <div className="account__head">
              <h3 className="account__title">
                Welcome to
                <span className="account__logo">
                  {' '}Easy
                  <span className="account__logo-accent">DEV</span>
                </span>
              </h3>
              <h4 className="account__subhead subhead">
                Start your business easily
              </h4>
            </div>
            <SignUpForm loading={loading} onSubmit={this.handleSubmit} />
            <div className="account__or">
              <p>Or Easily Using</p>
            </div>
            <div className="account__social">
              <Link
                className="account__social-btn account__social-btn--facebook"
                to="/pages/one"
              >
                <FacebookIcon />
              </Link>
              <Link
                className="account__social-btn account__social-btn--google"
                to="/pages/one"
              >
                <GooglePlusIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators (
    {
      userLogin,
    },
    dispatch
  );

export default connect (null, mapDispatchToProps) (SignUp);

// if you want to add select, date-picker and time-picker in your app you need to uncomment the first
// four lines in /scss/components/form.scss to add styles
