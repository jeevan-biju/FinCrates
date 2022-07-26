import "./authfail.css";
import React, { useState } from "react";

const logoimg =
  "https://firebasestorage.googleapis.com/v0/b/xsnipp-prot-2.appspot.com/o/crate%20logo%20png.png?alt=media&token=6d61b0a1-a723-43db-aa00-cb66ff26dff8";

const logotext =
  "https://firebasestorage.googleapis.com/v0/b/xsnipp-prot-2.appspot.com/o/fincrates%20word%20png.png?alt=media&token=d1c89c42-d46d-4506-892c-526c2d4031d8";

const lock_logo =
  "https://firebasestorage.googleapis.com/v0/b/xsnipp-prot-2.appspot.com/o/lockimg.png?alt=media&token=2c8cfa48-2980-4ed0-a639-993376624041";

function Authfail_Page() {
  return (
    <div className="App">
      <div className="logoflex">
        <img className="logoimg" src={logoimg}></img>
        <img className="logotxt" src={logotext}></img>
      </div>

      <div className="wholeblock">
        <img className="lockimg" src={lock_logo}></img>
        <h3 className="fail_txt">LOGIN FAILED</h3>
        <p className="tytxt">
          The Username And Password did not match. Please Try Again.
        </p>

        <div />
        <button className="button-12">Retry</button>
      </div>
    </div>
  );
}

export default Authfail_Page;
