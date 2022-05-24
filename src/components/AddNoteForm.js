import React, {useState} from "react";
import { ADD_NOTE } from "../reducers/notes";



const AddNoteForm = ({notesDispatch}) => {
  
  //Manage form state
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
    notesDispatch({type: ADD_NOTE, note:{title, content: noteContent}});
    setTitle('');
    setNoteContent('');
  }
  
  return (
    <div className="w-1/3">
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
  );
}

export { AddNoteForm as default}