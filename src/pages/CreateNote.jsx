import { Link } from "react-router-dom"
import {IoIosArrowBack} from "react-icons/io"

const CreateNote = () => {
  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="button"><IoIosArrowBack /></Link>
        <button className="button lg primary">Save</button>
      </header>
      <form className="create-note__form">
        <input type="text" placeholder="Title" autoFocus />
        <textarea rows="28" placeholder="Note details..."></textarea>
      </form>
    </section>
  )
}

export default CreateNote