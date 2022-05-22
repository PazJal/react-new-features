import React, { useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';


const notesReducer = (state, action) => {
  switch (action.type) {
    case 'POPULATE_NOTES':
      return action.notes;
    default: 
      return state;
  }
}

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
  //TODO: remove console log
  console.log(notes);
  
  useEffect(() => {
    const storageNotes = window.localStorage.getItem('Notes');
    if(storageNotes){
      // setNotes(JSON.parse(storageNotes));
      notesDispatch({ type: 'POPULATE_NOTES' , notes: JSON.parse(storageNotes)})
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
    // setNotes(notes.filter((note) => (note.title !== title)))
  }

  return (
    <div>
      <h1>Notes</h1>
      { notes.map((note) => (
        <Note key={note.title} note={note} removeNote={removeNote}/>
      ))}
      <p>Add Note</p>
      <form onSubmit={addNote}>
        <div>
          <input type="text" value={ title } onChange={ (e) => { setTitle( e.target.value ) } } />
          <textarea name="" id="" cols="30" rows="10" value={noteContent} onChange={(e) => {setNoteContent(e.target.value)}}></textarea>
          <button>add note</button>
        </div>
      </form>
    </div>
  )
}

const Note = ({note, removeNote}) => {

  useEffect(() => {
    console.log('Setting up effect!');
    return (() => {
      console.log('Cleaning up effect!')
    })
  }, []);

  return (
        <div>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={() => removeNote(note.title)}>x</button>
        </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <NoteApp/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
