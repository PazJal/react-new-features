const ADD_NOTE = 'ADD_NOTE';
const REMOVE_NOTE = 'REMOVE_NOTE';
const POPULATE_NOTES = 'POPULATE_NOTES'

const notesReducer = (state, action) => {
  console.log('state: ', state);
  switch (action.type) {
    case POPULATE_NOTES:
      return action.notes;
    case ADD_NOTE:
      return [...state, action.note]
    case REMOVE_NOTE:
      return [...state].filter((note) => (note.title !== action.title));
    default: 
      return state;
  }
}

export {ADD_NOTE, REMOVE_NOTE, POPULATE_NOTES, notesReducer};