import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import { Filter } from "../components/Filter/Filter";
import NoteList from "../components/NoteList/NoteList";

const Notes = ({ notes, setNotes }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState("");
  const [filteredNotes, setFilteredNotes] = useState(notes);
  const [showOnlyImportant, setShowOnlyImportant] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleSearch = () => {
    setFilteredNotes(
      notes.filter((note) => {
        if (note.title.toLowerCase().match(text.toLowerCase())) return note;
      })
    );
  };

  const handleSetImportant = (noteId, currentImportant) => {
    const updatedNotes = notes.map((note) =>
      note.id === noteId ? { ...note, important: !currentImportant } : note
    );
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  useEffect(handleSearch, [text]);

  const handleFilterChange = (value) => {
    setShowOnlyImportant(value === "true");
  };

  useEffect(() => {
    let updatedNotes = notes;
    if (showOnlyImportant) {
      updatedNotes = updatedNotes.filter((note) => note.important);
    }
    setFilteredNotes(updatedNotes);
  }, [showOnlyImportant, notes]);

  console.log(notes);

  return (
    <section>
      <Header
        showSearch={showSearch}
        text={text}
        setText={setText}
        handleSearch={handleSearch}
        setShowSearch={setShowSearch}
      />
      <Filter
        isDropdownOpen={isDropdownOpen}
        setIsDropdownOpen={setIsDropdownOpen}
        handleFilterChange={handleFilterChange}
      />
      <NoteList
        filteredNotes={filteredNotes}
        handleSetImportant={handleSetImportant}
        showOnlyImportant={showOnlyImportant}
        setShowOnlyImportant={setShowOnlyImportant}
      />
    </section>
  );
};

export default Notes;
