import React from 'react';

function BusinessDetails() {
  return (
    <div className="container">
      <div className="modal-details">
        <h3>STATE</h3>
        <p>You'll provide the state you run you business</p>
      </div>
      <div className="modal-details">
        <h3>C.A.C. RC NUMBER</h3>
        <p>You will need to provide your CAC RC Number</p>
      </div>
      <div className="modal-details">
        <h3>CAC CERTIFICATE</h3>
        <p>We want you to upload your CAC certificate</p>
      </div>
      <div className="modal-details">
        <h3>CAC DOC WITH DIRECTORS</h3>
        <p>It is important you upload copy of CAC document with directors</p>
      </div>
      <div className="modal-details">
        <h3>UTILITY BILL</h3>
        <p>You'll need to upload copy of utility bill.</p>
      </div>
    </div>
  );
}

export default BusinessDetails;
