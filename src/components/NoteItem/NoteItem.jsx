import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { MdLabelImportant, MdLabelImportantOutline } from "react-icons/md";
import "./NoteItem.css";

const NoteItem = ({ note, handleSetImportant }) => {
  const toggleImportant = () => {
    handleSetImportant(note.id, note.important);
  };
  return (
    <div className="note">
      <h4>
        {note.title.length > 50 ? note.title.substr(0, 50) + "..." : note.title}
      </h4>
      <p className="note__details">{note.details}</p>
      <p className="note__date">{note.date}</p>
      <div className="note-buttons">
        <Link to={`edit-note/${note.id}`}>
          <button className="button">
            <AiOutlineEdit></AiOutlineEdit>
          </button>
        </Link>
        <button className="button" onClick={toggleImportant}>
          {!note.important ? <MdLabelImportantOutline /> : <MdLabelImportant />}
        </button>
      </div>
    </div>
  );
};

export default NoteItem;
