import { BrowserRouter, Routes, Route } from "react-router-dom"
import Notes from "./pages/Notes";
import CreateNote from "./pages/CreateNote"
import EditNote from "./pages/EditNote";
import { useState } from "react";

const App = () => {
  const [notes, setNotes] = useState([]);

  return (
    <main id="main">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes notes={notes} />}/>
          <Route path="/create-note" element={<CreateNote setNotes={setNotes}/>}/>
          <Route path="/edit-note/:id" element={<EditNote />}/>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
