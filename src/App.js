import './App.css';
import Home from './Page/MainPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  return (

    <Router>
      <div className="App">
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
