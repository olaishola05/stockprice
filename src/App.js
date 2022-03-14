import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import './App.scss';

function App() {
  return (
    <div className="main-container">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
