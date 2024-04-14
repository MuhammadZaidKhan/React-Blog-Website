import './App.css';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Blogs from './Components/Blogs'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <Blogs />
      {/* <Routes>
        <Route path='/' element={} />
        <Route path='/' element={} />
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;