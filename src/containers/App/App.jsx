import React, {Component, Fragment} from 'react';

import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
//import '../../assets/css/now-ui-kit.css';
import 'bootstrap/dist/css/bootstrap.css';

//import '../../assets/css/bootstrap.min.css';
//import '../../assets/css/now-ui-kit.css';
import '../../scss/app.scss';
import '../../App.css';
import Router from './Router';
import store from './store';
import ScrollToTop from './ScrollToTop';

import jwtDecode from 'jwt-decode';
import {USER_LOGIN} from '../../redux/actions/auth';
if (typeof localStorage.token !== 'undefined') {
  const token = jwtDecode (localStorage.token);
  if (token) {
    store.dispatch ({
      type: USER_LOGIN,
      payload: token,
    });
  }
}

class App extends Component {
  constructor () {
    super ();
    this.state = {
      loading: true,
      loaded: false,
    };
  }

  componentDidMount () {
    window.addEventListener ('load', () => {
      this.setState ({loading: false});
      setTimeout (() => this.setState ({loaded: true}), 500);
    });
  }

  render () {
    const {loaded, loading} = this.state;
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ScrollToTop>
            <Fragment>
              {!loaded &&
                <div className={`load${loading ? '' : ' loaded'}`}>
                  <div className="load__icon-wrap">
                    <svg className="load__icon">
                      <path
                        fill="#4ce1b6"
                        d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"
                      />
                    </svg>
                  </div>
                </div>}
              <div>
                <Router />
              </div>
            </Fragment>
          </ScrollToTop>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
