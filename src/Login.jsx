import React, { useState } from "react"; //importing useState hook
import { useNavigate } from "react-router-dom"; //importing useNavigate hook

function Login() {
  const navigate = useNavigate(); //navigate hook

  //usestate hook
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  /*handle change function, it will used on pressing login button and check all the conditions
  if password and username match it will navigate to editor page otherwise it will show an
  alert and navigate back to login page.Local storage is also created so that we can check
  either user have login or not because we can also directly go to editor page*/
  const handleChange = () => {
    localStorage.setItem("username", username);
    localStorage.setItem("isLoggedIn", "true");
    navigate("./editor");
  };

  return (
    <>
      <div className="container">
        <div className="container firstdiv mt-5">
          <h1 className="h1">
            <strong>Welcome To The Login Page</strong>
          </h1>
          <div className="box flex">
            <form onSubmit={handleChange}>
              <div className="flex">
                <label htmlFor="username">Username</label>
                <input
                  className="inputfield mt-2 mb-2"
                  type="email"
                  placeholder="example@gmail.com"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="flex">
                <label htmlFor="password">Password</label>
                <input
                  className="inputfield mt-2"
                  type="password"
                  placeholder="Password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="btn1" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
