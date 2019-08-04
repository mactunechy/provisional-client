import React, {Component} from 'react';

export class ChangePassword extends Component {
  constructor (props) {
    super (props);
    this.state = {
      password: '',
      renter: '',
    };
  }
  handleSubmit = () => {};
  render () {
    const {password, renter} = this.state;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="form__form-group">
          <span className="form__form-group-label">New Password</span>
          <div className="form__form-group-field">
            <input
              name="password"
              component="input"
              type="text"
              value={password}
              placeholder="....."
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">Re-Enter Password</span>
          <div className="form__form-group-field">
            <input
              name="renter"
              component="input"
              type="email"
              email={renter}
              placeholder="....."
            />
          </div>
        </div>

        <button
          className="btn btn-primary mt-4 account__btn account__btn--small"
          type="submit"
        >
          Change Password
        </button>
      </form>
    );
  }
}

export default ChangePassword;
