import { useState } from "react";
import "./signup.css"

export default function SignUp() {

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

    return (
    <div className='mainsignup'>
      <form className="signupform">
        <label>
          <input
            className='username1'
            type="text"
            placeholder='Enter Username'/>
        </label>
        <label>
          <input
            className='email1'
            type="email"
            placeholder='Enter Email'/>
        </label>
        <label>
          <input
            className='password1'
            type={passwordShown ? "text" : "password"}
            placeholder='Enter Password'/>
        </label>
        <label>
          <input
            className='confirmpassword1'
            type="password"
            placeholder='Confirm Password'/>
        </label>
        <label>
          Show Password
          <input type="checkbox" onClick={togglePassword}/>
        </label>
        <br />
        <button className='signup' type="submit">Create Account</button>
      </form>
    </div>
    )
}