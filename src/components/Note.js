import React, {useContext} from 'react';

import NotesContext from '../context/notes-context';
import { REMOVE_NOTE } from '../reducers/notes';

const Note = ({note}) => {
  const {notesDispatch} = useContext(NotesContext);



  return (
        <div className='rounded border-2 border-blue-500 p-2 w-1/3'>
          <h3 className='text-blue-300'>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={() => notesDispatch({type:REMOVE_NOTE, title: note.title})}
          className='rounded-full border-2 border-blue-300 p-2 '
          >
            x
          </button>
        </div>
  )
}

export {Note as default};