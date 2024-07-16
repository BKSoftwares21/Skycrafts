import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Data/Login';
import Register from './Data/Register';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route  path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
