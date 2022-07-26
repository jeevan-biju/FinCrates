import { addDoc, collection, doc } from "firebase/firestore";
import React, { useState } from "react";
import "./form.css";
import { db } from "./Firebase";
import { useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";

const logoimg =
  "https://firebasestorage.googleapis.com/v0/b/xsnipp-prot-2.appspot.com/o/crate%20logo%20png.png?alt=media&token=6d61b0a1-a723-43db-aa00-cb66ff26dff8";

const logotext =
  "https://firebasestorage.googleapis.com/v0/b/xsnipp-prot-2.appspot.com/o/fincrates%20word%20png.png?alt=media&token=d1c89c42-d46d-4506-892c-526c2d4031d8";

function Upload_Page() {
  let navigate = useNavigate();

  const { id } = useParams();
  console.log(id);
  const [phonenum, setPhonenum] = useState({});

  const [name, setName] = useState({});
  const [period, setPeriod] = useState({});

  function getphonenum(event) {
    setPhonenum(event.target.value);
  }

  function getName(event) {
    setName(event.target.value);
  }

  function getPeriod(event) {
    setPeriod(event.target.value);
  }

  async function submitHandler(event) {
    event.preventDefault();

    // console.log(id);

    console.log(
      "id" + id,
      "Phone Number " + phonenum,
      "Name " + name,
      "Subscription Period " + period
    );
    const collectionRef = collection(db, "Subscriptions");
    const payload = {
      Id: id,
      Name: name,
      Period: period,
      Number: phonenum,
    };
    await addDoc(collectionRef, payload);
    navigate("/success");

    console.log("The doc has been uploaded");
  }

  return (
    <div className="App">
      <div className="logoflex">
        <img className="logoimg" src={logoimg}></img>
        <img className="logotxt" src={logotext}></img>
      </div>
      <div className="wholeblock">
        <form className="wholeblock2" onSubmit={submitHandler}>
          <label className="lables">Phone Number:</label>
          <input type="text" onChange={getphonenum}></input>
          <label className="lablsname">Name:</label>
          <label className="optionaltext">*optional:</label>

          <input type="text" onChange={getName}></input>

          {/* RADIO */}

          <div className="radiobtns">
            <label className="lables2" for="1 Month" class="radio">
              1 Month:
            </label>
            <input
              className="dat1"
              id="1 Month"
              type="radio"
              value="1 Month"
              name="subscription"
              onChange={getPeriod}
            ></input>
            <br></br>
            <label className="lables2" class="radio" for="6 Months">
              6 Months:
            </label>

            <input
              className="dat2"
              id="6 Months"
              type="radio"
              value="6 Months"
              name="subscription"
              onChange={getPeriod}
            ></input>

            <label className="lables2" class="radio" for="1 Year">
              1 Year
            </label>

            <input
              className="dat3"
              id="1 Year"
              type="radio"
              value="1 Year"
              name="subscription"
              onChange={getPeriod}
            ></input>
          </div>

          <button className="button-12" role="button">
            Upload
          </button>
          <br></br>
          <br></br>
        </form>
      </div>
    </div>
  );
}

export default Upload_Page;
