import { Routes, Route, useParams } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import './App.scss';

function App() {
  const { param } = useParams();
  return (
    <div className="Apps">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path={`/details/:${param}`} element={<Details param={param} />} />
      </Routes>
    </div>
  );
}

export default App;
