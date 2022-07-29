import { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import NotesArea from './components/NotesArea';
import SearchBar from './components/SearchBar';

function App() {
  const [searchNotes, setSearchNotes] = useState('');
  return (
    <div className="App">
      <Nav />
      <SearchBar setSearchNotes={setSearchNotes} />
      <NotesArea searchNotes={searchNotes} />
    </div>
  );
}

export default App;
