import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter ,Route, Routes} from 'react-router-dom';

// Components Clases
import ClassList from './components/Clases/ClassList';
// Component Navbar
import Navbar from './components/Navbar/Navbar';
// Components Formulario
import FormUser from './components/Registro/FormUser';
// Component Home
import HomePage from './components/Home/HomePage';

import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> 
    <Navbar />
   {/* Home */}

  <div className="container">
    <Routes>
    <Route exact path="/" element={<HomePage />} />
    </Routes>
  </div>

  {/* clases */}
  <div className="container my-4">
    <Routes>
    <Route exact path="/ClassList" element={<ClassList />} />
    </Routes>
  </div>
  {/* FormUsuarios */}
  <div className='container'>
      <Routes>
      <Route exact path="/FormUser" element={<FormUser />} />
      </Routes>
  </div>
  
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


