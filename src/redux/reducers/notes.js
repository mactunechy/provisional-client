import {CURRENT_NOTES, NOTES_LIST} from '../actions/notes';

const initialState = {
  notesList: [
    {
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, reprehenderit.',
      id: 1,
      topic: {label: 'Good Habits', property: 'goodHabits', numberOfNotes: 34},
    },
    {
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, reprehenderit.',
      topic: {
        label: 'Road Diagrams',
        property: 'roadDiagrams',
        numberOfNotes: 34,
      },
      id: 2,
    },
    {
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, reprehenderit.',
      topic: {
        label: 'Road Signs and Regulations',
        property: 'signsAndRegulations',
        numberOfNotes: 34,
      },
      id: 3,
    },
  ],
  currentNotes: null,
  topics: [
    {label: 'Good Habits', property: 'goodHabits', numberOfNotes: 34},
    {
      label: 'Road Signs and Regulations',
      property: 'signsAndRegulations',
      numberOfNotes: 34,
    },
    {label: 'Road Diagrams', property: 'roadDiagrams', numberOfNotes: 34},
  ],
  // currentNotes : {
  //     id : 'fe5e-rw-4we-t',
  //     description : `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim explicabo similique quia? Natus consectetur libero neque architecto repellendus consequuntur ipsa.
  //     Lorem ipsum dolor sit, amet consectetur adipisicing
  //     `,
  //     examples : [
  //         {
  //             description : 'uia? Natus consectetur libero neque architecto repellendus consequuntur ipsa.',
  //             diagram : null,
  //             multipleChoice : [
  //                 {
  //                     letter : 'A',
  //                     description : 'Enim explicabo'
  //                 },
  //                 {
  //                     letter : 'B',
  //                     description : 'amet  Enim explicabo'
  //                 },
  //                 {
  //                     letter : 'C',
  //                     description : 'amet consectetu'
  //                 },
  //             ],
  //             answer : {
  //                 letter : 'C',
  //                 description : 'amet consectetu xplicabo'
  //             },
  //         },
  //         {
  //             description : ' Natus consectetur libero neque architecto repellendus consequuntur ipsa.',
  //             diagram : null,
  //             multipleChoice : [
  //                 {
  //                     letter : 'A',
  //                     description : 'amet consect explicabo'
  //                 },
  //                 {
  //                     letter : 'B',
  //                     description : 'amet consectetu'
  //                 },
  //                 {
  //                     letter : 'C',
  //                     description : 'amet consectetur '
  //                 },
  //             ],
  //             answer : {
  //                 letter : 'A',
  //                 description : 'amet '
  //             },
  //         }
  //     ]
  // }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NOTES_LIST:
      return {...state, notesList: action.payload};
    case CURRENT_NOTES:
      return {...state, currentNotes: action.payload};
    default:
      return state;
  }
};
