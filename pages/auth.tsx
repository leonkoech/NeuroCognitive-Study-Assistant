import style from "./auth.module.scss"
import Button from "../components/Button/Button";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from '../.env/secrets';
import Router from "next/router";
const signUp=()=>{
    Router.push('./home')
    console.log('sign Up')
}
const login =() => {
    console.log('log in ')
}

const app = initializeApp(firebaseConfig);

const auth=()=>{
   return (
    <div className={[style.card].join(" ")}>
        <h1>focus Buddy</h1>
        <form>
            <label htmlFor="email" className={[style.placeholder, style.email].join(" ")}>Email:</label>
            <br />
            <input id="email" name="email" placeholder=" "></input>
            <br/>
            <label htmlFor="password" className={[style.placeholder, style.password].join(" ")}>Password:</label>
            <br />
            <input id="password" placeholder=" "></input>
            <div onClick={signUp}><Button text="Create Account" type="dark"></Button></div>
            <div onClick={login}><Button text="Login" type="dark"></Button></div>
        </form>
    </div>
   )
}
export default auth;