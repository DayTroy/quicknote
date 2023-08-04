import { Link, useParams, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";
import useCreateDate from "../hooks/useCreateDate";

const EditNote = ({ notes, setNotes }) => {
  const { id } = useParams();
  const note = notes.find((item) => item.id === id);
  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);
  const date = useCreateDate();
  const navigate = useNavigate();
  const handleForm = (e) => {
    e.preventDefault();
    if (title && details) {
      const newNote = {...note, title, details, date}
      const newNotes = notes.map(note => {
        if (note.id === id) {
          note = newNote;
        }
        return note
      })
      setNotes(newNotes)
    }
    navigate("/");
  }

  const handleDelete = () => {
    const newNotes = notes.filter(note => note.id !== id);
    setNotes(newNotes);
    navigate("/")
  }


  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="button">
          <IoIosArrowBack />
        </Link>
        <button className="button lg primary" onClick={handleForm}>Save</button>
        <button className="button danger" onClick={handleDelete}>
          <RiDeleteBin6Line />
        </button>
      </header>
      <form className="create-note__form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
        <textarea
          rows="28"
          placeholder="Note details..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </form>
    </section>
  );
};

export default EditNote;
