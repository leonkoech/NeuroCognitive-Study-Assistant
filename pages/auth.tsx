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
    <div>
        <h1>focus Buddy</h1>
        <form>
            <label htmlFor="email">email:</label>
            <input id="email" name="email"></input>
            <label htmlFor="password">password:</label>
            <input id="password"></input>
            <div onClick={signUp}><Button text="Create Account" type="dark"></Button></div>
            <div onClick={login}><Button text="Login" type="dark"></Button></div>
        </form>
        
    </div>
   )
}
export default auth;