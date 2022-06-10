import React, {useState} from 'react'
import { useNavigate  } from "react-router-dom"

const Signup = () => {
  const [usertype, setuserType] = useState("");
  const navigate = useNavigate();
  return (
    <>
        <div class="col-md-4 mx-auto">
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            {/* <hr/> */}
            <label for="name"><b>Name</b></label>
            <input type="text" placeholder="Enter name" name="name" required/>

            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" required/>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required />

            <label for="psw-repeat"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" name="psw-repeat" required />

            <div class="row mx-auto text-center">
            <button type="button" class="btn btn-primary col-md-4 mt-3" onClick={() => {setuserType("mentor")}}>Mentor</button>
            <button type="submit" class="btn btn-info col-md-4 text-white offset-4 mt-3" onClick={() => {setuserType("employee")}}>Employee</button>
            </div>
            <button type="button" class="btn btn-danger col-md-4 offset-3 w-50" onClick={() => { 
              navigate('/addproject', {
              state: {usertype: usertype} 
            })
            }}>Sign Up</button>
        </div>
    </>
  )
}

export default Signup;