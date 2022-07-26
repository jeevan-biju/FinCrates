import "./App.css";
import Upload_Page from "./new_entry";
import Login_Page from "./loginPage";
import { Route, Routes, BrowserRouter as router } from "react-router-dom";
import Success_Page from "./successPage";
import Fail_Page from "./failPage";
import Authfail_Page from "./authfail";

function App() {
  return (
    <div>
      <router>
        <Routes>
          <Route path="/" exact element={<Login_Page />}></Route>
          <Route path="/upload/:id" element={<Upload_Page />}></Route>
          <Route path="/success" element={<Success_Page />}></Route>
          <Route path="/error" element={<Fail_Page />}></Route>
          <Route
            path="/authentication-fail"
            element={<Authfail_Page />}
          ></Route>
        </Routes>
      </router>
    </div>
  );
}

export default App;
