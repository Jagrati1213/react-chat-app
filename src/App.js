import Login from './Page/Login';
import Home from './Page/MainPage';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Sign from './Page/Sign';

function App() {

  return (

    <Router>
      <div className="App">
        <Routes>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sigin' element={<Sign />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
