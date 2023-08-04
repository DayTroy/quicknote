import React from "react";
import { Link } from "react-router-dom";
import "./NoteItem.css";

const NoteItem = ({ note }) => {
  return (
    <div className="note-item">
      <Link to={`edit-note/${note.id}`} className="note">
        <h4>
          {note.title.length > 50
            ? note.title.substr(0, 50) + "..."
            : note.title}
        </h4>
        <p>{note.details}</p>
        <p>{note.date}</p>
      </Link>
    </div>
  );
};

export default NoteItem;
