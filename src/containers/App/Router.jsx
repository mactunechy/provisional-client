import React from 'react';
import './main.css';

import {Route, Switch} from 'react-router-dom';
import Layout from '../Layout/index';
import MainWrapper from './MainWrapper';

import LogIn from '../LogIn/index';
import ExamplePageOne from '../Example/index';
import Profile from '../Profile';
import Dashboard from '../Dashboard';
import Notes from '../Notes';
import Questions from '../Questions';
import Exams from '../Exams';
import ExamRoom from '../ExamRoom';

const Pages = () => (
  <Switch>
    <Route path="/one" component={ExamplePageOne} />
    <Route path="/profile" component={Profile} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/notes" component={Notes} />
    <Route path="/questions" component={Questions} />
    <Route path="/exams" component={Exams} />
    <Route path="/exam-room/:id" component={ExamRoom} />
  </Switch>
);

const wrappedRoutes = () => (
  <div>
    <Layout />
    <div id="main" className="container__wrap" style={{overflow: 'hidden'}}>
      <Route path="/" component={Pages} />
    </div>
  </div>
);

const Router = () => (
  <MainWrapper>
    <main>
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route exact path="/log_in" component={LogIn} />
        <Route path="/" component={wrappedRoutes} />
      </Switch>
    </main>
  </MainWrapper>
);

export default Router;
