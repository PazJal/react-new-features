import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// const App = ( props ) => {

//   const [ count, setCount ] = useState(props.count);
//   const [ text, setText ] = useState('');

//   return (
//     <div>
//       <p>The current { text || 'count' } is { count }</p>
//       <button onClick={ () => setCount( count - 1) }> -1 </button>
//       <button onClick={ () => setCount( props.count ) }> Reset </button>
//       <button onClick={ () => setCount( count + 1) }> +1 </button>
//       <input type="text" value={ text } onChange={ ( e ) => { setText( e.target.value ) } } />
//     </div>
// );
// }

// App.defaultProps = {
//   count: 0
// }

/**
 * 
 * @returns a note component to render.
 * 
 * @property notes keeps the notes list.
 * @property title saves the currently typed title in the UI.
 * @property noteContent saves the currently typed content in the UI.
 * 
 */

const NoteApp = () => {

  const [ notes, setNotes ] = useState( [] );
  const [ title, setTitle ] = useState('');
  const [ noteContent, setNoteContent ] = useState('');


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
    setNotes([...notes, { 
      title,
      noteContent
    }])
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
    setNotes(notes.filter((note) => (note.title !== title)))
  }


  return (
    <div>
      <h1>Notes</h1>
      { notes.map((note) => (
        <div key={note.title}>
          <h3>{note.title}</h3>
          <button onClick={() => removeNote(note.title)}>x</button>
        </div>
      ))}
      <p>Add Note</p>
      <form onSubmit={addNote}>
        <input type="text" value={ title } onChange={ (e) => { setTitle( e.target.value ) } } />
        <button>add note</button>
      </form>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NoteApp/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
