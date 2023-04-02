import './App.css';
import Board from './components/Board';
import "./App.css"
import Queue from './components/Queue';

function App() {
  return (
    <div className="App">
      <div className='sidebar'>
        <h2>
          Queue
        </h2>
      </div>
      <div className='majority'>
        <Queue></Queue>
      </div>

    </div>
  );
}

export default App;
