import './App.css';
import { useState, useEffect } from 'react';
import { getJournal, test } from './service/journalService';

function App() {
  const [entry, setEntry] = useState('');

  useEffect(() => {
    test.then(res => {
      setEntry(res.data);
    }).catch(err => console.error(err));
  }, []);

  const handleSubmit = e => {
    console.log(e.target.textarea.value)
    e.preventDefault();
    // create a post request to set entry and update entries
    console.log(entry);
  }
  
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <textarea placeholder='enter your entry...' value={entry} onChange={e => setEntry(e.target.value)}>
        </textarea>
        <button type='submit'>Create entry</button>
      </form>

      {entry.journal}
    </div>
  );
}

export default App;
