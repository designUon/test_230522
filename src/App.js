import logo from './logo.svg';
import './App.css';
import "tailwindcss/tailwind.css";
// import './tailwind.css'
import Home from './components/Home';
import LoginForm from './components/LoginForm'
import Main from './components/Main'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loginform" element={<LoginForm />} />
          <Route path="/main" element={<Main/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
