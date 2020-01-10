import React from 'react';
// import './PersonalDetails.scss';

function PersonalDetails() {
  return (
    <div className="container">
      <div className="modal-details">
        <h3>BVN</h3>
        <p>We use BVN is ensure that the account belongs to you. We only have access to your first name, lastname, mobile number and date of birth. Your BVN does not give us access to your bank account or transactions</p>
      </div>
      <div className="modal-details">
        <h3>EMAIL</h3>
        <p>We use Email to create your account on prospa</p>
      </div>
      <div className="modal-details">
        <h3>PASSWORD</h3>
        <p>Password is needed to your account to be secured. We advise you use combination of symbols and character to create a strong password</p>
      </div>
      <div className="modal-details">
        <h3>REPEAT PASSWORD</h3>
        <p>A repeat of same password is required. This assures us that you are sure of the password entered.</p>
      </div>
    </div>
  );
}

export default PersonalDetails;
