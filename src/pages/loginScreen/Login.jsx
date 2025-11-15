import { useState,createContext, useContext } from "react";
import { Form, Link, redirect, useNavigate } from "react-router-dom";
import '../../styles/Login.css';
export const PinContext = createContext(null);
export const Login = () => {
    const navigate = useNavigate();
    const [inputs, setInput] = useState("");
    const [status, SetStatus] = useState("");
    const pin = "1565";
    const keypad = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const Error = <div class="alert alert-danger" role="alert">Incorrect PIN</div>;
    const Success = <div class="alert alert-success" role="alert">Login Successful!</div>

  const verifyPin = () => {
    if (inputs === pin) {
      SetStatus(Success);
      setTimeout(() => navigate("/home"), 800);
    } else {
      SetStatus(Error);
      setTimeout(() => SetStatus(null), 2000);
    }
  };

    return   (

    <div className="Login-Container">
        {console.log(inputs)}
        <div className="Status">{status}</div>
    <div className="Input-Container"><input type="password" value={inputs} placeholder="Enter PIN"/></div>
    <div className="Keypad-Container">
        
        {keypad.map ((index, key) => (
            <div key={key} >
        
                
                <div className="Keypad" onClick={()=> {setInput((prevInput) => (prevInput + index).slice(0,10))}}> {index}</div>    
            </div>
        ))}

        
    </div>
        <div className="Control-Container">
            <div className="Backspace-Button" onClick={()=> {setInput((prevInput) => (prevInput.slice(0,-1)))}}>Backspace</div>
            <div className="Login-Button" onClick={verifyPin}>Login</div>
            <div className="Clear-Button" onClick={()=>{setInput("")}}>Clear</div>

        </div>

    </div>
    )
}



export default Login;