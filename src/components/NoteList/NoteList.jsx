import React from "react";
import NoteItem from "../NoteItem/NoteItem";
import "./NoteList.css";

const NoteList = ({ filteredNotes, handleSetImportant, showOnlyImportant }) => {
  const filteredNotesToDisplay = showOnlyImportant
    ? filteredNotes.filter((note) => note.important)
    : filteredNotes;
  return (
    <div className="notes__container">
      {filteredNotesToDisplay.length === 0 ? (
        <p className="empty__notes">Заметка не найдена =/</p>
      ) : (
        filteredNotesToDisplay.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            handleSetImportant={handleSetImportant}
          />
        ))
      )}
    </div>
  );
};

export default NoteList;
