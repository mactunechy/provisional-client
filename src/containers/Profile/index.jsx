import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import FacebookIcon from 'mdi-react/FacebookIcon';
import GooglePlusIcon from 'mdi-react/GooglePlusIcon';
import ProfileForm from './components/ProfileForm';
import {Col, Row} from 'reactstrap';

class index extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }
  render () {
    return (
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <div className="account__wrapper">
            <div className="card-body">
              <div className="account__head">
                <h3 className="account__title">
                  Welcome
                  <span className="account__logo">
                    {' '} Dellan
                  </span>
                </h3>
                <h4 className="account__subhead subhead">
                  your account and personal details
                </h4>
              </div>
              <h4>Personal Details</h4>
              <hr className="mt-1 mb-4" />
              <ProfileForm onSubmit />
              <div className="account__or">
                <p>Account Details</p>
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
        </Col>
      </Row>
    );
  }
}

export default index;
// if you want to add select, date-picker and time-picker in your app you need to uncomment the first
// four lines in /scss/components/form.scss to add styles
