import React, {useEffect, useReducer, useState} from 'react';

import { notesReducer, ADD_NOTE, REMOVE_NOTE, POPULATE_NOTES } from '../reducers/notes';
import Note from './Note';

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
  const [ title, setTitle ] = useState('');
  const [ noteContent, setNoteContent ] = useState('');
  
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
   * 
   * @param {} e event received from form submission. 
   * prevents default from submission. 
   * adds a new note to current state.
   * udpates the UI to represent state. 
   * 
   */
  const addNote = ( e ) => {
    e.preventDefault();
    notesDispatch({type: ADD_NOTE, note:{title, content: noteContent}});
    // setNotes([...notes, { 
    //   title,
    //   content: noteContent
    // }])
    setTitle('');
    setNoteContent('');
  } 
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
    <div className='p-5 max-w-xl space-y-3'>
      <h1  className='text-3xl font-bold underline text-blue-600'>Notes</h1>
      { notes.map((note) => (
        <Note key={note.title} note={note} removeNote={removeNote}/>
      ))}
      <p>Add Note</p>
      <form onSubmit={addNote}>
        <div className='flex-col flex max-w-xl space-y-3'>
          <input type="text" value={ title } onChange={ (e) => { setTitle( e.target.value ) } } 
            className='border-2 border-blue-300 rounded-xl p-2'
          />
          <textarea name="" id="" cols="30" rows="10" value={noteContent} onChange={(e) => {setNoteContent(e.target.value)}}
            className='border-2 border-blue-300 rounded-xl p-2'
          ></textarea>
          <button className='
            rounded-full border-2 p-2  border-blue-300'
          >
            add note
          </button>
        </div>
      </form>
    </div>
  )
}

export {NoteApp as default}