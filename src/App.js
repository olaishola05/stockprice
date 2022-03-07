import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import './App.scss';

function App() {
  return (
    <div className="Apps">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
