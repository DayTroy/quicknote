import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdClose } from "react-icons/md"
import { Link } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";
import NoteItem from "../components/NoteItem";

const Notes = ({ notes }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState('');
  const [filteredNotes, setFilteredNotes] = useState(notes);

  const handleSearch = () => {
    setFilteredNotes(notes.filter(note => {
      if (note.title.toLowerCase().match(text.toLowerCase())) return note;
    }))
  }

  useEffect(handleSearch, [text])

  return (
    <section>
      <header className="notes__header">
        {!showSearch && <h2>Notes</h2>}
        {showSearch && (
          <input
            value={text}
            autoFocus
            type="text"
            placeholder="Type something..."
            onChange={(e) => {setText(e.target.value); handleSearch()}}
          />
        )}
        <button
          className="button"
          onClick={() => setShowSearch(prevState => !prevState)}
        >
          {!showSearch ? <CiSearch /> : <MdClose />}
        </button>
      </header>
      <div className="notes__container">
        {filteredNotes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>
      <Link to={"/create-note"} className="button add__button">
        <BsPlusLg />
      </Link>
    </section>
  );
};

export default Notes;
