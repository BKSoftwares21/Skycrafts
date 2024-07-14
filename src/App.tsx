import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Data/Login';
import Register from './Data/Register'; 

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Login /> 
          <Register />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
