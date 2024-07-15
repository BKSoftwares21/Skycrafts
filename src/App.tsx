import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Data/Login';
import Register from './Data/Register';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
