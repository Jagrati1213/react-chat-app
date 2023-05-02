import './App.css';
import { Signin } from './components/auth/Signin';
import { Login } from './components/auth/Login';
import Home from './components/chatBox/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (

    <Router>
      <div className="App">
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
