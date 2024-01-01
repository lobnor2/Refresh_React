import React, { useState } from "react";

const LearnConditionalRendering = () => {
  const [isLogin, setIsLogin] = useState(false);
  const handleLogout = () => {
    setIsLogin((prev) => !prev);
  };
  const handleLogin = () => {
    setIsLogin((prev) => !prev);
  };
  return (
    <div>
      <h1>Conditional Rendering</h1>
      {isLogin ? (
        <>
          <h1>Dashboard</h1>
          <button onClick={handleLogout}>logout</button>
        </>
      ) : (
        <>
          <h1>Login Page</h1>
          <button onClick={handleLogin}>Click to login</button>
        </>
      )}
    </div>
  );
};

export default LearnConditionalRendering;
