import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import NoteList from "../components/NoteList/NoteList";
import {AiOutlineFilter} from "react-icons/ai"

const Notes = ({ notes }) => {
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

  const handleSetImportant = (noteId) => {
    const updatedNotes = filteredNotes.map((note) =>
      note.id === noteId ? { ...note, important: !note.important } : note
    );
    setFilteredNotes(updatedNotes);
  };
  

  useEffect(handleSearch, [text]);

  const handleFilterChange = (value) => {
    setShowOnlyImportant(value === "true");
  };
  useEffect(() => {
    if (showOnlyImportant) {
      setFilteredNotes(filteredNotes.filter((note) => note.important));
    } else {
      handleSearch();
    }
  }, [showOnlyImportant]);

  return (
    <section>
      <Header
        showSearch={showSearch}
        text={text}
        setText={setText}
        handleSearch={handleSearch}
        setShowSearch={setShowSearch}
      />
      <div className="filter-dropdown">
        <AiOutlineFilter className="filter-icon" onClick={() => setIsDropdownOpen(!isDropdownOpen)} />
        {isDropdownOpen && (
          <select
            id="filter-select"
            className={`filter-select ${showOnlyImportant ? "custom-select" : ""}`}
            value={showOnlyImportant}
            onChange={(e) => handleFilterChange(e.target.value)}
          >
            <option value={false}>All</option>
            <option value={true}>Important</option>
          </select>
        )}
      </div>
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
