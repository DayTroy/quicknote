import React from "react";
import NoteItem from "../NoteItem/NoteItem";
import "./NoteList.css";

const NoteList = ({ filteredNotes, setFilteredNotes }) => {
  const handleSetImportant = (noteId) => {
    const updatedNotes = filteredNotes.map((filteredNote) =>
      filteredNote.id === noteId
        ? { ...filteredNote, important: !filteredNote.important }
        : filteredNote
    );
    setFilteredNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };
  return (
    <div className="notes__container">
      {filteredNotes.length === 0 && (
        <p className="empty__notes">No notes found =/</p>
      )}
      {filteredNotes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          important={note.important}
          handleSetImportant={handleSetImportant}
        />
      ))}
    </div>
  );
};

export default NoteList;
