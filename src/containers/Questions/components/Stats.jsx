import React, {Component} from 'react';
import './style.css';

class Stats extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }
  render () {
    return (
      <React.Fragment>
        <div className="progress-container progress-primary mb-3">
          <h4 className="progress-badge mb-3">
            My Questions Bundle
            {' '}
            <small className="float-right">7left</small>
            {' '}
          </h4>
          <div className="progress bg-white" style={{height: 3}}>
            <div
              className="progress-bar progress-bar-warning"
              role="progressbar"
              aria-valuenow="60"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{width: '40%'}}
            />
          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default Stats;
