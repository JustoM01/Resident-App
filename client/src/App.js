
import './App.css';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom'
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
function App() {
  return (
    <div className="App">

   <Router>
       <Routes>
           <Route path="/" element={<Login/>} />
           <Route path="/profile" element={<Profile/>} />
           <Route path='/register'element={<Register/>} />
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
