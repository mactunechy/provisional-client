export const GET_QUESTIONS = 'GET_QUESTIONS';

export const GET_CURRENT_QUESTION = 'GET_CURRENT_QUESTION';

export const getCurrentQuestion = payload => ({
  type: GET_CURRENT_QUESTION,
  payload,
});

export const getQuestions = payload => ({
  type: GET_QUESTIONS,
  payload,
});
