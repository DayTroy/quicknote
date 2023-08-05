import React from "react";
import "./NoteForm.css";

const NoteForm = ({ title, details, setTitle, setDetails, handleSubmit }) => {
  return (
    <form className="note__form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Заголовок"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        autoFocus
      />
      <textarea
        rows="22"
        placeholder="Детали заметок..."
        value={details}
        onChange={(e) => setDetails(e.target.value)}
      ></textarea>
    </form>
  );
};

export default NoteForm;
