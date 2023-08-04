import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import useCreateDate from "../hooks/useCreateDate";
import NoteForm from "../components/NoteForm/NoteForm";

const CreateNote = ({ setNotes }) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const date = useCreateDate();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title && details) {
      const note = { id: uuid(), title, details, date };
      // Add notes
      setNotes((prevNotes) => [note, ...prevNotes]);
      // navigate back to home page
      navigate("/");
    }
  };

  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="button">
          <IoIosArrowBack />
        </Link>
        <button className="button lg primary" onClick={handleSubmit}>
          Save
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
