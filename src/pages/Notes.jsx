import React, { useEffect, useState } from "react";
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
      <NoteList filteredNotes={filteredNotes} />
    </section>
  );
};

export default Notes;
