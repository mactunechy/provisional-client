import React, {Component} from 'react';
import AccountDetails from './components/AccountDetails';
import ProfileForm from './components/ProfileForm';
import {Col, Row} from 'reactstrap';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ChangePassword from './components/ChangePassword';

class UserAccount extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }
  static propTypes = {
    user: PropTypes.shape ({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      subscription: PropTypes.string.isRequired,
    }),
  };
  render () {
    const {user} = this.props;
    return (
      <Row className="justify-content-center mb-4">
        <Col md={10} lg={8}>
          <div className="account__wrapper">
            {user &&
              <div className="card-body">
                <div className="account__head">
                  <h3 className="account__title">
                    Welcome
                    <span className="account__logo">
                      {' '} {user.firstName}
                    </span>
                  </h3>
                  <h4 className="account__subhead subhead">
                    your account and personal details
                  </h4>
                </div>
                <h4>Personal Details</h4>
                <hr className="mt-1 mb-4" />
                <ProfileForm onSubmit user={user} />
                <div className="account__or">
                  <p>Account Details</p>
                </div>
                <AccountDetails user={user} />
                <div className="account__or">
                  <p>Change Password</p>
                </div>
                <ChangePassword />
              </div>}
          </div>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  user: state.users.user,
});

export default connect (mapStateToProps) (UserAccount);
// if you want to add select, date-picker and time-picker in your app you need to uncomment the first
// four lines in /scss/components/form.scss to add styles
