import React, {useEffect, useReducer} from 'react';

import { notesReducer, REMOVE_NOTE, POPULATE_NOTES } from '../reducers/notes';
import NoteList from './NoteList';
import AddNoteForm from './AddNoteForm';
import NotesContext from '../context/notes-context';

/**
 * 
 * loads the notes from localStorage
 * 
 * @returns a note component to render.
 * 
 * @property notes keeps the notes list.
 * @property title saves the currently typed title in the UI.
 * @property noteContent saves the currently typed content in the UI.
 * 
 */

 const NoteApp = () => {

  // const [ notes, setNotes ] = useState([]);
  const [ notes , notesDispatch ] = useReducer(notesReducer, []);
  
  useEffect(() => {
    const storageNotes = window.localStorage.getItem('Notes');
    if(storageNotes){
      // setNotes(JSON.parse(storageNotes));
      notesDispatch({ type: POPULATE_NOTES , notes: JSON.parse(storageNotes)})
    } 
  }, []); 
  
  useEffect(() => {
    window.localStorage.setItem('Notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <NotesContext.Provider value={{notes, notesDispatch}}>
      <div className='p-5 space-y-3 flex flex-col items-center'>
        <h1  className='text-3xl font-bold underline text-blue-600'>Notes</h1>
        <NoteList/>
        <AddNoteForm notesDispatch={notesDispatch} />
      </div>
    </NotesContext.Provider>
    
  )
}

export {NoteApp as default}