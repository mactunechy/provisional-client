import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default class TopbarMenuLinks extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    Icon: PropTypes.object.isRequired,
    path: PropTypes.string,
  };

  render () {
    const {title, path, handleClick, Icon} = this.props;

    return handleClick
      ? <button
          className="topbar__link pl-2 btn btn-secondary mx-2"
          style={{width: '90%'}}
          onClick={handleClick}
        >
          <Icon />
          <p className="topbar__link-title">{title}</p>
        </button>
      : <Link className="topbar__link " to={path}>
          <Icon />
          <p className="topbar__link-title mt-1 ml-2">{title}</p>
        </Link>;
  }
}
