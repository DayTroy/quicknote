import React from "react";
import NoteItem from "../NoteItem/NoteItem";
import "./NoteList.css";

const NoteList = ({ filteredNotes }) => {
  return (
    <div className="notes__container">
      {filteredNotes.length === 0 && (
        <p className="empty__notes">"No notes found.=/</p>
      )}
      {filteredNotes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NoteList;
