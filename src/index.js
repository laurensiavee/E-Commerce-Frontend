import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from './Component/Navbar';
<<<<<<< Updated upstream
import Home from './Pages/Home';
=======
import Login from './Pages/Login';
import Register from './Pages/Register';
>>>>>>> Stashed changes

<link href="/dist/output.css" rel="stylesheet"></link>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
<<<<<<< Updated upstream
    <div className='my-5 mx-44'>
      <Home />
    </div>
    {/* footer */}
=======
    {/* <Register /> */}
    <Login />
    {/* <CarouselPromotion /> */}
>>>>>>> Stashed changes
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();