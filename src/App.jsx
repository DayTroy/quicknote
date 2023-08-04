import './App.css'
import Header from './components/Header';
import NoteList from "./components/NoteList";

const App = () => {

  return (
    <>
      <div className='app-wrapper'>
          <Header />
          <NoteList />
      </div>
    </>
  )
}

export default App
