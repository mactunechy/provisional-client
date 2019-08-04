import React, {PureComponent} from 'react';
import DownIcon from 'mdi-react/ChevronDownIcon';
import {Collapse} from 'reactstrap';
import TopbarMenuLink from './TopbarMenuLink';
import PersonIcon from 'mdi-react/PersonIcon';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {userLogout} from '../../../redux/actions/auth';
import Auth from '../../../services/auth';
import ExitToAppIcon from 'mdi-react/ExitToAppIcon';
import PersonCardDetailsIcon from 'mdi-react/PersonCardDetailsIcon';

class TopbarProfile extends PureComponent {
  static propTypes = {
    user: PropTypes.object,
  };
  constructor () {
    super ();
    this.state = {
      collapse: false,
    };
  }

  toggle = () => {
    this.setState (prevState => ({collapse: !prevState.collapse}));
  };
  logOut = () => {
    Auth.removeToken ();
    this.props.userLogout ();
  };

  render () {
    const {collapse} = this.state;
    const {user} = this.props;
    return (
      <div className="topbar__profile">
        <button type="button" className="topbar__avatar" onClick={this.toggle}>
          <PersonIcon />
          <p className="topbar__avatar-name">{user && user.firstName}</p>
          <DownIcon className="topbar__icon" />
        </button>
        {collapse &&
          <button
            type="button"
            className="topbar__back"
            onClick={this.toggle}
          />}
        <Collapse isOpen={collapse} className="topbar__menu-wrap">
          <div className="topbar__menu">
            <TopbarMenuLink
              Icon={PersonCardDetailsIcon}
              title="My Profile"
              path="/profile"
              onClick={this.hideSidebar}
            />
            <div className="topbar__menu-divider" />
            <TopbarMenuLink
              title="Log Out"
              Icon={ExitToAppIcon}
              name={'logOut'}
              handleClick={this.logOut}
            />
          </div>
        </Collapse>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators (
    {
      userLogout,
    },
    dispatch
  );

export default connect (mapStateToProps, mapDispatchToProps) (TopbarProfile);
