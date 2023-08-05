import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import NoteList from "../components/NoteList/NoteList";
import {AiOutlineFilter} from "react-icons/ai"

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

    // Обновить filteredNotes на основе нового состояния важности
    if (showOnlyImportant) {
      setFilteredNotes(updatedNotes.filter((note) => note.important));
    }
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
