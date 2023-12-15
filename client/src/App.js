import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [test, setTest] = useState();

  useEffect(() => {

    axios.get('/api/test')
      .then(res => setTest(res.data.test))
      .catch(err => console.error(err));

  }, []);


  return (
    <div className="App">
      <p>{test}</p>
    </div>
  );
}

export default App;
