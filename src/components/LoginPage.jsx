import { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
// import 'App.css';

const LoginPage = () => {
  // const email = useRef("");
  // const password = useRef("");

  const [formData, setFormData] = useState({name: "", email: "", password: ""});
  // const [name, setName] = useState("");

  const [isLogin, setIslogin] = useState(1);

  function handleInputChanges(e) {
    setFormData({...formData, [e.target.name]: e.target.value});
    console.log(setFormData);
  }

  return (
    <div className="wrapper">
      <div className="container">
        <div className="heading">{isLogin ? "Login" : "Sign Up"}</div>

        {!isLogin && (
          <div className="input">
            <input type="name" name="name" value={formData.name} onChange={handleInputChanges} placeholder="Name *" required />
            <div>
              <FaUser className="icon" />
            </div>
          </div>
        )}

        <div className="input">
          <input type="email" name="email" value={formData.email} onChange={handleInputChanges} placeholder="Email *" required />
          <div>
            <FaEnvelope className="icon" />
          </div>
        </div>

        <div className="input">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChanges}
            placeholder="Password *"
            required
          />
          <div>
            <FaLock className="icon" />
          </div>
        </div>

        <div className="forgot-pass">
          {isLogin && <a href="#">Forgot password?</a>}
        </div>

        <button className="login-btn">
          {isLogin ? "Login" : "Sign Up"}
        </button>

        <div className="signup">
          <p>
            {isLogin ? "Don't have account ? " : "Already registered "}
            <button
              className="signup-change"
              onClick={() => {
                setIslogin(!isLogin);
              }}
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
