import { Routes, Route, useParams } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import './App.scss';

function App() {
  const { param } = useParams();
  return (
    <div className="Apps">
      <Routes>
        <Route exact path="/" element={<Home param={param} />} />
        <Route path={`/details/:${param}`} element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
