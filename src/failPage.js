import React, { useState } from "react";
import "./success_Page.css";
import { db } from "./Firebase";
import { collection, doc, onSnapshot } from "firebase/firestore";
import { getDoc } from "firebase/firestore";

const logoimg =
  "https://firebasestorage.googleapis.com/v0/b/xsnipp-prot-2.appspot.com/o/crate%20logo%20png.png?alt=media&token=6d61b0a1-a723-43db-aa00-cb66ff26dff8";

const logotext =
  "https://firebasestorage.googleapis.com/v0/b/xsnipp-prot-2.appspot.com/o/fincrates%20word%20png.png?alt=media&token=d1c89c42-d46d-4506-892c-526c2d4031d8";

const fail_logo =
  "https://firebasestorage.googleapis.com/v0/b/xsnipp-prot-2.appspot.com/o/fail%20trans.png?alt=media&token=2ca2d396-f392-4695-abfa-f541c0fa77cb";

function Fail_Page() {
  return (
    <div className="App">
      <div className="logoflex">
        <img className="logoimg" src={logoimg}></img>
        <img className="logotxt" src={logotext}></img>
      </div>

      <div className="wholeblock">
        <img className="successimg" src={fail_logo}></img>
        <h3 className="upload_txt">UPLOAD ERROR</h3>
        <p className="cong_txt">Sorry, Something Went Wrong</p>

        {/* <button class="button-12" role="button">
          Add New
        </button> */}

        <div />
        <button className="button-12">Add New</button>
      </div>
    </div>
  );
}

export default Fail_Page;
