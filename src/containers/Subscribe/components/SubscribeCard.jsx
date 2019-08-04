import React, {Component} from 'react';
import {Card, CardBody, Col, Row} from 'reactstrap';
import EyeIcon from 'mdi-react/EyeIcon';
import CreditCardIcon from 'mdi-react/CreditCardIcon';
import BankIcon from 'mdi-react/BankIcon';
import PhoneClassicIcon from 'mdi-react/PhoneClassicIcon';
import FormLoader from '../../../shared/components/FormLoader';

class SubscribeCard extends Component {
  constructor (props) {
    super (props);
    this.state = {showAccountNumber: false, packageType: '', loading: false};
  }
  handleChange = () => {};

  render () {
    const {showAccountNumber, packageType, loading} = this.state;
    return (
      <Col md={10} lg={8}>
        <Card className="mb-4">
          <CardBody>
            <div class="account__head">
              <h3 class="account__title">
                Upgrade Subcription
              </h3>
              <h4 class="account__subhead subhead">
                The enterpise package will give you access to all we have
              </h4>
            </div>
            <Row className="justify-content-center mt-4">
              <Col md={12}>
                <form className="form">
                  <div className="form__form-group">
                    <span className="form__form-group-label">Package</span>
                    <div className="form__form-group-field">
                      <div className="form__form-group-icon">
                        <BankIcon />
                      </div>
                      <select
                        required
                        className="select-control"
                        name="packageType"
                        onChange={this.handleChange}
                        value={packageType}
                      >
                        <option>select package</option>
                        <option value="PREMIUM">Premium</option>
                        <option value="ENTERPRISE">ENTERPRISE</option>
                      </select>
                    </div>
                  </div>

                  <div className="form__form-group">
                    <span className="form__form-group-label">Bank Account</span>
                    <div className="form__form-group-field">
                      <div className="form__form-group-icon">
                        <CreditCardIcon />
                      </div>
                      <input
                        name="password"
                        type={showAccountNumber ? 'text' : 'password'}
                        placeholder="Account number"
                        required
                      />
                      <button
                        className={`form__form-group-button${showAccountNumber ? ' active' : ''}`}
                        onClick={e => this.showPassword (e)}
                        type="button"
                      >
                        <EyeIcon />
                      </button>
                    </div>
                  </div>
                  <div className="account__or" style={{margin: '30px auto'}}>
                    <h4>Or Easily Using Ecocash</h4>
                  </div>
                  <div className="form__form-group">
                    <span className="form__form-group-label">
                      Ecocash Number
                    </span>
                    <div className="form__form-group-field">
                      <div className="form__form-group-icon">
                        <PhoneClassicIcon />
                      </div>
                      <input
                        component="input"
                        required
                        name="e"
                        type="email"
                        placeholder="ecocash number"
                      />
                    </div>
                  </div>
                  {loading
                    ? <FormLoader />
                    : <button
                        type="submit"
                        className="btn btn-danger account__btn account__btn--small mt-4"
                        to="/pages/one"
                      >
                        Subscribe
                      </button>}
                </form>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default SubscribeCard;
