import Login from './Page/Login';
import Home from './Page/MainPage';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Sign from './Page/Sign';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from './Store/slice/AddUserSlice';
import { auth } from './firebaseStore/Firebase';
import { onAuthStateChanged } from 'firebase/auth';


function App() {

  const dispatch = useDispatch();
  const { currentUser } = useSelector(state => state.users);

  // Check is user Exit or not 
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      dispatch(setCurrentUser(user));
    });
    return () => unsub();
  }, []);
  return (

    <Router>
      <div className="App">
        <Routes>
          <Route index element={currentUser ? <Home /> : <Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signin' element={<Sign />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
