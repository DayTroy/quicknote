import { Link, useParams, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdLabelImportant, MdLabelImportantOutline } from "react-icons/md";
import { useState } from "react";
import useCreateDate from "../hooks/useCreateDate";
import NoteForm from "../components/NoteForm/NoteForm";

const EditNote = ({ notes, setNotes }) => {
  const { id } = useParams();
  const note = notes.find((item) => item.id === id);
  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);
  const date = useCreateDate();
  const navigate = useNavigate();

  const handleSetImportant = (noteId, currentImportant) => {
    const updatedNotes = notes.map((note) =>
      note.id === noteId ? { ...note, important: !currentImportant } : note
    );
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (title && details) {
      const newNote = { ...note, title, details, date };
      const newNotes = notes.map((note) => {
        if (note.id === id) {
          note = newNote;
        }
        return note;
      });
      setNotes(newNotes);
    }
    navigate("/");
  };

  const handleDelete = () => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    navigate("/");
  };

  const toggleImportant = () => {
    handleSetImportant(note.id, note.important);
  };

  return (
    <section className="edit">
      <header className="note__header">
        <Link to="/" className="button">
          <IoIosArrowBack />
        </Link>
        <button className="button lg primary" onClick={handleForm}>
          Сохранить
        </button>
        <button className="button " onClick={toggleImportant}>
          {!note.important ? <MdLabelImportantOutline /> : <MdLabelImportant />}
        </button>
        <button className="button danger" onClick={handleDelete}>
          <RiDeleteBin6Line />
        </button>
      </header>
      <NoteForm
        title={title}
        details={details}
        setTitle={setTitle}
        setDetails={setDetails}
      />
    </section>
  );
};

export default EditNote;
