import { useState } from "react";
import validator from "validator";

function App() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const validatePassword = () => {
    if (
      validator.isStrongPassword(password, {
        minLength: 6,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setMessage("Password is strong");
    } else {
      setMessage("Password is not strong");
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="max-w-[500px] bg-slate-200 px-[50px] py-[20px] rounded-xl">
        <h1 className="text-lg mb-5">Checking Password Strength in Reactjs</h1>
        <div className="grid">
          <label htmlFor="password" className="mb-2">
            Enter password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={passwordHandler}
            className="border-none outline-none px-2 py-1 rounded-md"
          />
        </div>
        <div className="flex justify-center items-center my-5 bg-green-500 py-2 rounded-md text-white">
          <button onClick={validatePassword}>Validate Password</button>
        </div>
        <div className="my-5 flex justify-center items-center">
          <p className="text-sm">{message}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
