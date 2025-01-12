import { useRef, useState } from "react";
import "./App.css";
import Heading1 from "./components/Heading1";

const App = () => {
  const email = useRef("");
  const password = useRef("");

  const print = () => {
    console.log(email.current.value);
    console.log(password.current.value);
  };

  return (
    <div className="wrapper">
      <div className="container">
        <Heading1 text={"Login Here"} />

        <div className="input">
          <input type="email" ref={email} placeholder="Email" />
          <div>
            <img src="/public/mail-img.png" className="icon" />
          </div>
        </div>

        <div className="input">
          <input type="password" ref={password} placeholder="Password" />
          <div>
            <img src="/public/password-img.png" className="icon" />
          </div>
        </div>

        <div className="forgot-pass">
          <a href="#">Forgot password?</a>
        </div>

        <button className="login-btn" onClick={print}>
          Login
        </button>

        <div className="signup">
          <p>
            Don't have account ? <button className="signup-change">Signup</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
