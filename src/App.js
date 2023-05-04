import './App.css';
import { Signin } from './components/auth/Signin';
import { Login } from './components/auth/Login';
import Home from './components/chatBox/Home';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from './components/context/AuthContext';

function App() {

  const { currentUser } = useContext(AuthContext);
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to='/login' />
    }
  }
  return (

    <Router>
      <div className="App">
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signin' element={<Signin />} />
          <Route index element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
