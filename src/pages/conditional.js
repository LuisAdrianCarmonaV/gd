import React, { useState } from "react";

function conditional() {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  function handleLogin() {
    setisLoggedIn(true);
  }

  function handleLogout() {
    setisLoggedIn(false);
  }

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p> Bienvenido!</p>
          <button onClick={handleLogout}> Logout </button>
        </div>
      ) : (
        <div>
          <p> Favor de iniciar sesion!</p>
          <button onClick={handleLogin}> Login </button>
        </div>
      )}
    </div>
  );
}

export default conditional;
