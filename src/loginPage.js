import React, { useState } from "react";
import "./loginform.css";
import { db } from "./Firebase";
import { collection, doc, onSnapshot } from "firebase/firestore";
import { getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Errorbar from "./authfail";

const logoimg =
  "https://firebasestorage.googleapis.com/v0/b/xsnipp-prot-2.appspot.com/o/crate%20logo%20png.png?alt=media&token=6d61b0a1-a723-43db-aa00-cb66ff26dff8";

const logotext =
  "https://firebasestorage.googleapis.com/v0/b/xsnipp-prot-2.appspot.com/o/fincrates%20word%20png.png?alt=media&token=d1c89c42-d46d-4506-892c-526c2d4031d8";

function Login_Page() {
  <Errorbar />;
  <h1>ervrverve</h1>;
  let navigate = useNavigate();

  const [username, setUsername] = useState({});
  const [password, setPassword] = useState({});

  function getUsername(event) {
    setUsername(event.target.value);
  }

  function getPassword(event) {
    setPassword(event.target.value);
  }

  function nav(err) {
    console.log(err + "ya its me");
    navigate("authentication-fail");
  }

  function handlesubmit(event) {
    let authui = "nop";
    event.preventDefault();

    const docRef = doc(db, "authentication", username);
    getDoc(docRef)
      .then((doc) => {
        const thedata = doc.data();
        const thepass = thedata["pass"];

        if (thepass == password) {
          console.log("yupp");
          authui = "tru";
        } else {
          console.log("wrong credentials");
          navigate("authentication-fail");

          authui = "nop";
        }

        console.log(authui);
        if (authui == "tru") {
          navigate("/upload/" + username);
          console.log("authentication works");
        }

        if (authui == "nop") {
          console.log("authentication failed");
        }
      })
      .catch(nav);
  }

  return (
    <div className="App">
      <div className="logoflex">
        <img className="logoimg" src={logoimg}></img>
        <img className="logotxt" src={logotext}></img>
      </div>

      <div className="wholeblock">
        <h3 className="logintext">Admin Login</h3>
        <form className="wholeblock2" onSubmit={handlesubmit}>
          {/* username */}
          <label className="lables">Username: </label>
          <input type="text" name="username" onChange={getUsername}></input>

          {/* password */}

          <label className="lables">Password:</label>
          <input type="password" name="password" onChange={getPassword}></input>
          <br></br>
          <button class="button-12" role="button">
            Login
          </button>
          <br></br>
          <br></br>
        </form>

        <div />
      </div>
    </div>
  );
}

export default Login_Page;
