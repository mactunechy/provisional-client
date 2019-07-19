export const GET_EXAM_LIST = 'GET_EXAM_LIST';

export const GET_CURRENT_EXAM = 'GET_CURRENT_EXAM';

export const SET_NEXT_QUESTION = 'SET_NEXT_QUESTION';

export const EXAM_COMPLETE = 'EXAM_COMPLETE';

export const examCompleted = payload => ({
  type: EXAM_COMPLETE,
  payload,
});

export const setNextQuestion = payload => ({
  type: SET_NEXT_QUESTION,
  payload,
});

export const getCurrentExam = payload => ({
  type: GET_CURRENT_EXAM,
  payload,
});

export const getExamsList = payload => ({
  type: GET_EXAM_LIST,
  payload,
});
