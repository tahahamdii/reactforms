import "./App.css";
import { useState } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    const isEmailValid = validateEmail(email);
    const isRoleValid = role === "individual" || role === "business" ;
    return isEmailValid && isRoleValid;
  };

  const clearForm = () => {
    setLastName("");
    setFirstName(""); 
    setEmail("");
    setPassword("");
    setRole("role");
     };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (Number(password) <= 8){
      alert("Please Provide a better password");
      return;
    }

    alert("Account created!");
    clearForm();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input placeholder="First name"
              type="text"
              firstname="firstname" 
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input placeholder="Last name"
             type="text"
             lastname="lastname" 
             value={lastName} 
             onChange = { (e) => setLastName(e.target.value)} />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input placeholder="Email address" 
            email="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input placeholder="Password"
              type="password"
              password="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" >
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
