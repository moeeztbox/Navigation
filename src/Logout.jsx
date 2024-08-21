import React from "react";
import { useNavigate } from "react-router-dom"; //imported useNavigate hook

function Logout() {
  const navigate = useNavigate();

  /*handleClick functon is created so that while clicking on Logout button my handleClick function
  will execute.navigate is used in this function so that when we press on logout it will take
  us to login page or our default page.The items which are sotored in localstorage are removed
  so that on logging out our all functions will perform again. */

  /*Warning 
  If local storage is not removed the data which we get from editor will be still stored in localstorage 
and to check validity either user has login or not this was also stored in local storage so when we 
logout we can access editor page without logging.
  */
  const handleClick = () => {
    navigate("/");
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <button className="btn1" type="submit" onClick={handleClick}>
      Logout
    </button>
  );
}

export default Logout;
