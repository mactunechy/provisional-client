import {
  GET_EXAM_LIST,
  GET_CURRENT_EXAM,
  SET_NEXT_QUESTION,
  EXAM_COMPLETE,
} from '../actions/exams';

const initialState = {
  examsList: [],
  currentExamQuestion: null,
  currentExam: {
    id: '3',
    completed: false,
    score: null,
    grade: null,
    questions: [
      {
        id: '1',
        description: 'uia? Natus consectetur libero neque architecto repellendus consequuntur ipsa.',
        diagram: null,
        topic: {
          label: 'Road Diagrams',
          property: 'roadDiagrams',
          numberOfNotes: 34,
        },
        multipleChoice: [
          {
            letter: 'A',
            description: 'Enim explicabo',
          },
          {
            letter: 'B',
            description: 'amet  Enim explicabo',
          },
          {
            letter: 'C',
            description: 'amet consectetu',
          },
        ],
        answer: {
          letter: 'A',
          description: 'amet consectetu xplicabo',
        },
      },
      {
        id: '2',
        description: 'uia? Natus consectetur libero neque architecto repellendus consequuntur ipsa.',
        diagram: null,
        topic: {
          label: 'Road Diagrams',
          property: 'roadDiagrams',
          numberOfNotes: 34,
        },
        multipleChoice: [
          {
            letter: 'A',
            description: 'Enim explicabo',
          },
          {
            letter: 'B',
            description: 'amet  Enim explicabo',
          },
          {
            letter: 'C',
            description: 'amet consectetu',
          },
        ],
        answer: {
          letter: 'C',
          description: 'amet consectetu xplicabo',
        },
      },
      {
        id: '3',
        description: 'uia? Natus consectetur libero neque architecto repellendus consequuntur ipsa.',
        diagram: null,
        topic: {
          label: 'Road Diagrams',
          property: 'roadDiagrams',
          numberOfNotes: 34,
        },
        multipleChoice: [
          {
            letter: 'A',
            description: 'Enim explicabo',
          },
          {
            letter: 'B',
            description: 'amet  Enim explicabo',
          },
          {
            letter: 'C',
            description: 'amet consectetu',
          },
        ],
        answer: {
          letter: 'B',
          description: 'amet consectetu xplicabo',
        },
      },
    ],
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_EXAM:
      return {...state, currentExam: action.payload};
    case GET_EXAM_LIST:
      return {...state, examsList: action.payload};
    case SET_NEXT_QUESTION:
      return {...state, currentExamQuestion: action.payload};
    case EXAM_COMPLETE:
      return {...state, currentExam: action.payload};
    default:
      return state;
  }
};
