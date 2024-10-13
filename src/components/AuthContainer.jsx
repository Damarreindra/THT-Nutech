import React from 'react';

function AuthContainer({ children }) {
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-center">
        <div className="flex-1 p-10 bg-white">
          {children}
        </div>
        <div className="flex-1 p-10 bg-white hidden sm:block ">
          <img src="../images/Login.png" alt="Login" />
        </div>
      </div>
    </>
  );
}

export default AuthContainer;
