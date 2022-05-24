import React from 'react';


const Note = ({note, removeNote}) => {

  return (
        <div className='rounded border-2 border-blue-500 p-2'>
          <h3 className='text-blue-300'>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={() => removeNote(note.title)}
          className='rounded-full border-2 border-blue-300 p-2 '
          >
            x
          </button>
        </div>
  )
}

export {Note as default};