import React from 'react'
import "./NoteItem.css";

const NoteItem = () => {
  return (
    <div className='note-item'>
        <p className="note-item__title">Заголовок</p>
        <p className="note-item__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius harum labore, tempore expedita veritatis doloremque, maxime illum aspernatur tenetur molestias saepe quae corporis amet ad quas. Dicta nesciunt reprehenderit minima?</p>
        <button className='button'>Delete</button>
        <button className='button'>Change</button>
    </div>
  )
}

export default NoteItem;    