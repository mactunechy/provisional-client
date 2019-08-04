import React from 'react';
import PropTypes from 'prop-types';

const AccountDetails = props => (
  <div>
    <h5>Account Id <span className="float-right">{props.user.id}</span></h5>
    <hr className="mt-1 mb-3" />
    <h5>
      Account Type
      {' '}
      <span className="float-right text-warning">
        {props.user.subscription}
      </span>
    </h5>
    <hr className="mt-1 mb-3" />
    {props.user.subscription !== 'enterprise' &&
      <button className="btn btn-danger account__btn account__btn--small">
        Upgrade to Pro
      </button>}
  </div>
);

AccountDetails.propTypes = {
  user: PropTypes.object,
};

export default AccountDetails;
