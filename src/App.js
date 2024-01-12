// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
import './App.css';
import Login from './Pages/login';
import Register from './Pages/register';
import Index from './Pages';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/index' element={<Index />} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;