import './App.css';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Blogs from './Components/Blogs'
import Footer from './Components/Footer'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <Blogs />
      <Footer />
      {/* <Routes>
        <Route path='/' element={} />
        <Route path='/' element={} />
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;