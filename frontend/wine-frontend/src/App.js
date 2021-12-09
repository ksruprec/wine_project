import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//components
import HomePage from './pages/HomePage';
import WinePage from './pages/WinePage';
import AddWinePage from './pages/AddWinePage';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/wines" element={<HomePage/>} />
          <Route exact path="/wines/:wineID" element={<WinePage/>} />
          <Route exact path="/wines/add" element={<AddWinePage/>} />
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
