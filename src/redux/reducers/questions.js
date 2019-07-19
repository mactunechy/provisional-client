import {GET_QUESTIONS, GET_CURRENT_QUESTION} from '../actions/questions';

const initialState = {
  questionsList: [
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
        letter: 'C',
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
        letter: 'C',
        description: 'amet consectetu xplicabo',
      },
    },
  ],
  currentQuestion: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return {...state, questions: action.payload};
    case GET_CURRENT_QUESTION:
      return {...state, currentQuestion: action.payload};
    default:
      return state;
  }
};
