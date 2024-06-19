import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear token from local storage
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div className="flex justify-between items-center  ">
      <ul className="flex bg-slate-600 justify-between w-full p-5 text-white">
        <span>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
        </span>
        <span className="flex gap-5">
          {token ? (
            <>
              <li>Welcome</li>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link to={"/login"}>
                <li>Login</li>
              </Link>
              <Link to={"/register"}>
                <li>Register</li>
              </Link>
            </>
          )}
        </span>
      </ul>
    </div>
  );
};

export default Navbar;

// { isAdmin ? hello admin : you are not admin}
// if(isAdmin){
//   hello admin
// }else{
//   you are not admin
// }

// {token ? (<></>):(<></>)}

// {
//   token ? (
//     <>
//       <li>Welcome</li>
//       <button onClick={handleLogout}>Logout</button>
//     </>
//   ) : (
//     <>
//       <Link to={"/login"}>
//         <li>Login</li>
//       </Link>
//       <Link to={"/register"}>
//         <li>Register</li>
//       </Link>
//     </>
//   );
// }
