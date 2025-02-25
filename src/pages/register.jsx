import React,{useState,useEffect} from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import {regisiterRoute} from "../utils/APIRoutes";

function Register(props) {
    const [values,setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const toastoptions={
        position:"bottom-right",
        autoClose:8000,
        pauseOnHover:true,
        draggable:true,
        theme:"dark"
    }
    const handlevalidation = ()=>{
        const {username,email,password,confirmPassword} = values;
        if(password!==confirmPassword){
            toast.error('the password and the confirm password must match!',toastoptions);
            return false
        }
        else if (email.length<3){
            toast.error('the email length should be greater',toastoptions);
            return false
        } else if (password.length<8){
            toast.error('the password length should be greater than 8',toastoptions);
            return false
        }
        else if (email===""){
            toast.error('the email cant be empty',toastoptions);        return false
        }
        return true
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if(handlevalidation()){
            console.log("im in validator")
            const {username,email,password} = values;
            const {data} = await axios.post(regisiterRoute,{
                username,email,password,
            });
        }
    };

    const handleChange = (event) => {
        setValues({...values,[event.target.name]: event.target.value})
    };

    return (
        <>
            <RegisterContainer> {/* More specific selector */}
                <form action="" onSubmit={(event) => handleSubmit(event)}>
                    <div className="brand">
                        <img src={Logo} alt="logo" />
                        <h1>Snappy</h1>
                    </div>
                    <input type="text" placeholder="Username" name="username" onChange={(e) => handleChange(e)} />
                    <input type="email" placeholder="Email" name="email" onChange={(e) => handleChange(e)} />
                    <input type="password" placeholder="Password" name="password" onChange={(e) => handleChange(e)} />
                    <input type="password" placeholder="Confirm Password" name="confirmPassword" onChange={(e) => handleChange(e)} />
                    <button type="submit">Create User</button>
                    <span>
                        Already A user?
                        <Link to={"/login"}>Login</Link>
                    </span>
                </form>
            </RegisterContainer>
            <ToastContainer/>
        </>
    );
}

const RegisterContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    background-color: #131324;

    .brand {
        display: flex;
        align-items: center;
        gap: 2rem;
        justify-content: center;

        img {
            height: 5rem;
        }

        h1 {
            color: white;
            text-transform: uppercase;
        }
    
    }
    form{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        background-color: #00000076;
        border-radius: 2rem;
        padding: 1rem 5rem;
        input{
            background-color: transparent;
            padding: 1rem;
            border: 0.1rem solid #4e0eff;
            border-radius: 0.4rem;
            color: white;
            width: 100%;
            font-size: 1rem;
            &:focus{
                border: 0.1rem solid #997af0;
                outline: none;
            }
        }
        button{
            background-color: #997af0;
            color: white;
            padding: 1rem 2rem;
            border: none;
            font-weight: bold;
            cursor: pointer;
            border-radius: 0.4rem;
            font-size: 1rem;
            text-transform: uppercase;
            transition: 0.5s  ease-in-out;
            &:hover{
                background-color: #4e0eff;
            }
        }
        span{
            color: white;
            text-transform: uppercase;
            a{
                color: #4e0eff;
                text-decoration: blink;
                font-weight: bold;
            }
        }
    }
`;

export default Register;
