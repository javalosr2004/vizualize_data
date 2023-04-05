import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Stack from './components/Stack';
import Queue from './components/Queue';
import Deque from './components/Deque';

function App() {
  return (
    <div className="App">
      <div className='sidebar'>
        <Link to="/"><h1>Stack</h1></Link>
        <Link to="/queue"><h1>Queue</h1></Link>
        <Link to='/deque'><h1>Deque</h1></Link>
      </div>
      <div className='majority'>
        <Routes>
          <Route path="/" element={<Stack/>}/>
          <Route path="/queue" element={<Queue/>}/>
          <Route path='/deque' element={<Deque/>}/>
        </Routes>
      </div>

    </div>


  );
}

export default App;
