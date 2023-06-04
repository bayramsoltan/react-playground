import React from "react";
//Comment line
/*Multiline comment */
const JSX3 = () => {
  const isAdmin = true;

  return (
    <div>
        {/* Ternary
        ? if it is true */}
      {isAdmin ? (
        <div>
          <h2>Admin Menu</h2>
          <ul>
            <li>Create User</li>
            <li>Update User</li>
            <li>Delete User</li>
          </ul>
        </div>
      ) : ( /* : if it is false  */
        <div>
          <h2>User Menu</h2>
          <ul>
            <li>Login</li>
            <li>Register</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default JSX3;
