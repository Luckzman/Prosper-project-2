import React, { useState } from 'react';
import './App.scss';
import PersonalDetails from './component/PersonalDetails';
import BusinessDetails from './component/BusinessDetails';
import BusinessDetails2 from './component/BusinessDetails2';

function App() {

  const [showPage1, setShowPage1] = useState(true);
  const [showPage2, setShowPage2] = useState(false);
  const [showPage3, setShowPage3] = useState(false);
  const [closeModal, setCloseModal] = useState(false);

  const handleShowPage1 = () => {
    setShowPage1(true);
    setShowPage2(false);
    setShowPage3(false);
  }
  const handleShowPage2 = () => {
    setShowPage1(false);
    setShowPage2(true);
    setShowPage3(false);
  }
  const handleShowPage3 = () => {
    setShowPage1(false);
    setShowPage2(false);
    setShowPage3(true);
  }

  const handleCloseBtn = () => {
    setCloseModal(!closeModal)
    handleShowPage1();
  }

  return (
    <div className="App">
      <button className="signup-btn" onClick={handleCloseBtn}>Signup with Prospa</button>
      {!closeModal && <div className="overlay">
        <div className="modal">
          <div className="brand">
            <img
              src="https://res.cloudinary.com/dx0nauane/image/upload/v1578560334/prospa_logo.jpg"
              alt="brand logo"
            />
            <h2>Welcome to Prospa</h2>
            <p>Thank you for your interest in signing up with Prospa. Checkout the list of required information we need before you get started</p>
          </div>
          <div className="signup-info">
            {showPage3 && <div className="close-btn" onClick={handleCloseBtn}>
              X
            </div>}
            {showPage1 && <PersonalDetails />}
            {showPage2 && <BusinessDetails />}
            {showPage3 && <BusinessDetails2 />}
            <div className="carousel-links">
              <div className="btn" onClick={handleShowPage1}>1</div>
              <div className="btn" onClick={handleShowPage2}>2</div>
              <div className="btn" onClick={handleShowPage3}>3</div>
            </div>
          </div>
        </div>
      </div>}
    </div>
  );
}

export default App;
