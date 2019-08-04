import React from 'react';
import './main.css';
import requireAuth from '../../hoc/requireAuth';
import {Route, Switch} from 'react-router-dom';
import Layout from '../Layout/index';
import MainWrapper from './MainWrapper';

import LogIn from '../LogIn/index';
import SignUp from '../SignUp/index';
import Profile from '../Profile';
import Dashboard from '../Dashboard';
import Notes from '../Notes';
import Questions from '../Questions';
import Exams from '../Exams';
import ExamRoom from '../ExamRoom';
import AddQuestion from '../Admin/AddQuestion';
import AddNotes from '../Admin/AddNotes';
import AddTopic from '../Admin/AddTopic';
import Statistics from '../Admin/Statistics';
import Subscribe from '../Subscribe';

const Pages = () => (
  <Switch>
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/notes" component={Notes} />
    <Route exact path="/questions" component={Questions} />
    <Route exact path="/exams" component={Exams} />
    <Route exact path="/questions/add" component={AddQuestion} />
    <Route exact path="/stats" component={Statistics} />
    <Route exact path="/notes/add" component={AddNotes} />
    <Route exact path="/topic/add" component={AddTopic} />
    <Route exact path="/exam-room/:id" component={ExamRoom} />
    <Route exact path="/subscribe" component={Subscribe} />
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
        <Route exact path="/sign_up" component={SignUp} />
        <Route path="/" component={requireAuth (wrappedRoutes)} />
      </Switch>
    </main>
  </MainWrapper>
);

export default Router;
