import React from 'react'
import {CiSearch} from "react-icons/ci"
import {Link} from "react-router-dom";
import {BsPlusLg} from "react-icons/bs"
import NoteItem from "../components/NoteItem";


const Notes = ({notes}) => {
  return (
    <section>
      <header className="notes__header">
        <h2>Notes</h2>
        {/* <input autoFocus
               type="text" 
               placeholder='Type something...'
               name="" 
               id="" /> */}
        <button className='button'><CiSearch/></button>
      </header>
      <div className="notes__container">
          {
            notes.map(note => <NoteItem key={note.id} 
            note={note} />)
          }
      </div>
      <Link to={"/create-note"} className='button add__button'><BsPlusLg /></Link>
    </section>
  )
}

export default Notes