import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";
import Header from "../components/Header/Header";
import NoteList from "../components/NoteList/NoteList";

const Notes = ({ notes }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState("");
  const [filteredNotes, setFilteredNotes] = useState(notes);

  const handleSearch = () => {
    setFilteredNotes(
      notes.filter((note) => {
        if (note.title.toLowerCase().match(text.toLowerCase())) return note;
      })
    );
  };

  useEffect(handleSearch, [text]);

  return (
    <section>
      <Header
        showSearch={showSearch}
        text={text}
        setText={setText}
        handleSearch={handleSearch}
        setShowSearch={setShowSearch}
      />
      <Link to={"/create-note"} className="button add__button">
        <BsPlusLg />
      </Link>
      <NoteList filteredNotes={filteredNotes} />
    </section>
  );
};

export default Notes;
