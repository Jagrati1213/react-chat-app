import Login from './Page/Login';
import Home from './Page/MainPage';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  return (

    <Router>
      <div className="App">
        <Routes>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
