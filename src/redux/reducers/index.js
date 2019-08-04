import themeReducer from './themeReducer';
import sidebarReducer from './sidebarReducer';
import {reducer as reduxFormReducer} from 'redux-form';
import {combineReducers} from 'redux';
import auth from './auth';
import notes from './notes';
import questions from './questions';
import exams from './exams';
import users from './users';
import topics from './topics';

export const reducer = combineReducers ({
  form: reduxFormReducer, // mounted under "form",
  theme: themeReducer,
  sidebar: sidebarReducer,
  auth,
  notes,
  questions,
  exams,
  users,
  topics
});
