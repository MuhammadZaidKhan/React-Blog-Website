import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Blogs from './Components/Blogs'
import Footer from './Components/Footer'
import Bot from './Components/Bot';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Bot />
      <Home />
      <Blogs />
      <Footer />
    </BrowserRouter>
  );
}

export default App;