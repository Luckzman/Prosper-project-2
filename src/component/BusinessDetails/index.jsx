import React from 'react';

function BusinessDetails() {
  return (
    <div className="container">
      <div className="modal-details">
        <h3>BUSINESS NAME</h3>
        <p>This is required for you business name to be properly registered on our platform</p>
      </div>
      <div className="modal-details">
        <h3>TRADE NAME</h3>
        <p>We will like to know what you business is called on ground</p>
      </div>
      <div className="modal-details">
        <h3>BUSINESS CATEGORY</h3>
        <p>Select your business type</p>
      </div>
      <div className="modal-details">
        <h3>COUNTRY</h3>
        <p>Provide country where you run your business</p>
      </div>
      <div className="modal-details">
        <h3>ADDRESS</h3>
        <p>You'll provide address of your business</p>
      </div>
      <div className="modal-details">
        <h3>CITY</h3>
        <p>We'll need city where you operate</p>
      </div>
    </div>
  );
}

export default BusinessDetails;
