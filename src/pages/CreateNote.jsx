import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { MdLabelImportant, MdLabelImportantOutline } from "react-icons/md";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import useCreateDate from "../hooks/useCreateDate";
import NoteForm from "../components/NoteForm/NoteForm";

const CreateNote = ({ setNotes }) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [important, setImportant] = useState(false);
  const date = useCreateDate();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title && details) {
      const note = { id: uuid(), title, details, date, important };
      setNotes((prevNotes) => [note, ...prevNotes]);
      navigate("/");
    }
  };

  const toggleImportant = () => {
    setImportant(!important);
  };

  return (
    <section>
      <header className="note__header">
        <Link to="/" className="button">
          <IoIosArrowBack />
        </Link>
        <button className="button lg primary" onClick={handleSubmit}>
          Save
        </button>
        <button className="button " onClick={toggleImportant}>
          {!important ? <MdLabelImportantOutline /> : <MdLabelImportant />}
        </button>
      </header>
      <NoteForm
        title={title}
        details={details}
        handleSubmit={handleSubmit}
        setTitle={setTitle}
        setDetails={setDetails}
      />
    </section>
  );
};

export default CreateNote;
