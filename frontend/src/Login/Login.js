import React, { useState } from 'react';
import './Login.css';
import { auth, provider, providerfb } from '../firebase/firebase';
import sliderImage from '../Assets/slider.jpg'; 
import sliderImage2 from "../Assets/slider2.jpg";

function Login(props) {
  const [nav, setnav] = useState('');
  const [loginPg, setloginpg] = useState('');
  const [resetPg, setresetPg] = useState('none');
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');

  // Default admin credentials for testing
  const defaultAdminEmail = 'admin@example.com';
  const defaultAdminPassword = 'admin123';

  function hidelogin() {
    setloginpg('none');
    setresetPg('');
  }

  function showlogin() {
    setloginpg('');
    setresetPg('none');
  }

  function navSignup() {
    setnav('sign-up-mode');
  }

  function navSignin() {
    setnav('sign-in-mode');
  }

  // Firebase Google sign-in
  const Signin = () => {
    auth.signInWithPopup(provider)
      .then((result) => {
        console.log(result.user);
        props.setUser(result.user);
        localStorage.setItem('email', result.user.email);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  // Firebase Facebook sign-in
  const SigninFb = () => {
    auth.signInWithPopup(providerfb)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  // Admin Login with default credentials for testing
  const handleAdminLogin = () => {
    if (adminEmail === defaultAdminEmail && adminPassword === defaultAdminPassword) {
      // Simulate admin login success
      alert('Admin login successful!');
      // You can store the admin status and bypass Firebase for testing
      props.setUser({ email: adminEmail });
      localStorage.setItem('email', adminEmail);
    } else {
      alert('Invalid admin credentials');
    }
  };

  return (
    <div className="form">
      <div className={`container ${nav}`}>
        <div className="forms-container">
          <div className="signin-signup">
            {/* User Sign In Form */}
            <form action="#" className="sign-in-form">
              <div style={{ display: 'flex' }}>
                <h2 className="title forgot_title" style={{ display: `${loginPg}` }}>Sign in with </h2>
                <a id="s_with_gl" className="social-icon" onClick={Signin}>
                  <i style={{ color: 'black' }} className="fab fa-google"></i>
                </a>
              </div>
              <h2 className="title forgot_title2" style={{ display: `${resetPg}` }}>Reset Password</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="email" placeholder="Email ID" id="user_email" required />
              </div>
              <div className="input-field forgot_input-field" style={{ display: `${loginPg}` }}>
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" id="user_password" required />
              </div>
              <div className="login_btn" style={{ paddingLeft: '20px', display: 'inline-flex' }}>
                <input type="button" value="Login" className="btn solid hide_btn" style={{ display: `${loginPg}` }} />
                <input type="button" value="Reset" className="btn solid" id="reset_btn" style={{ display: `${resetPg}` }} />
                <div className="loader-container">
                  <div className="loader" id="progress2" hidden></div>
                </div>
              </div>
              <div className="forgot_btn_hide" style={{ margin: '0px 0px' }}>
                <input type="button" value="Forgot Password?" className="btn solid" onClick={hidelogin} style={{ display: `${loginPg}`, backgroundColor: 'transparent', color: '#5995fd', marginRight: '30px' }} />
              </div>
              <div className="login_page_btn_hide" style={{ display: `${resetPg}` }}>
                <input type="button" value="← Go to login page" className="btn solid" onClick={showlogin} style={{ backgroundColor: 'transparent', color: '#5995fd', marginRight: '30px' }} />
              </div>
              <p id="messages2" style={{ color: '#5995fd' }} hidden>Account created successfully!</p>
              <div className="social-media" style={{ marginLeft: '-45px', marginTop: '20px' }}>
                <a id="s_with_fb" className="social-icon" onClick={SigninFb}>
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a id="s_with_gl" className="social-icon" onClick={Signin}>
                  <i className="fab fa-google"></i>
                </a>
              </div>
            </form>

            {/* Admin Login Form */}
            <form action="#" className="sign-up-form">
              <div style={{ display: 'flex' }}>
                <h2 className="title">Admin Login</h2>
              </div>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Admin Email"
                  value={adminEmail}
                  onChange={(e) => setAdminEmail(e.target.value)}
                  required
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Admin Password"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="button"
                  className="btn"
                  value="Login"
                  onClick={handleAdminLogin}
                />
                <div className="loader-container" style={{ display: 'inline-block' }}>
                  <div className="loader" id="progress1" hidden></div>
                </div>
              </div>
              <p id="messages1" style={{ color: '#5995fd' }} hidden>Account created successfully!</p>
              <div className="social-media" style={{ marginLeft: '-45px', marginTop: '20px' }}>
                <a id="s_with_fb" className="social-icon" onClick={SigninFb}>
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a id="s_with_gl" className="social-icon" onClick={Signin}>
                  <i className="fab fa-google"></i>
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3 style={{ marginTop: '0px' }}>Welcome To</h3>
              <span style={{ fontSize: '40px' }}>E-Library</span>
              <p>You are an Admin</p>
              <button className="btn transparent" id="sign-up-btn" onClick={navSignup}>
                Admin Login
              </button>
            </div>
            {/* <img src="https://e-library-1602.web.app/img/log.svg" className="image" alt="" /> */}
            <img src={sliderImage } className="image" alt="" />
            
            
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3 style={{ marginTop: '0px' }}>Welcome To</h3>
              <span style={{ fontSize: '40px' }}>E-Library</span>
              <p>You are a User</p>
              <button className="btn transparent" id="sign-in-btn" onClick={navSignin}>
                User Login
              </button>
            </div>
            {/* <img src="https://e-library-1602.web.app/img/register.svg" className="image" alt="" /> */}
            <img src={sliderImage2 } className="image" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
