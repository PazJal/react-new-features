import React, {useEffect, useReducer} from 'react';

import { notesReducer, REMOVE_NOTE, POPULATE_NOTES } from '../reducers/notes';
import NoteList from './NoteList';
import AddNoteForm from './AddNoteForm';

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
 
  /**
   * removes a note from the list. updates component state. 
   * 
   * @param {string} title title of the note to remove from the list.
   *  
   */
  const removeNote = (title) => {
    notesDispatch({type:REMOVE_NOTE, title});
    // setNotes(notes.filter((note) => (note.title !== title)))
  }

  return (
    <div className='p-5 space-y-3 flex flex-col items-center'>
      <h1  className='text-3xl font-bold underline text-blue-600'>Notes</h1>
      <NoteList notes={notes} removeNote={removeNote} />
      <AddNoteForm notesDispatch={notesDispatch} />
    </div>
  )
}

export {NoteApp as default}