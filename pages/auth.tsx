import Button from "../components/Button/Button";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from '../.env/secrets';

import style  from '../components/styles/main.module.scss'
import Router from "next/router";
const signUp=()=>{
    Router.push('./home')
    console.log('sign Up')
}
const login =() => {
    Router.push('./home')
}

const app = initializeApp(firebaseConfig);

const auth=()=>{
   return (
    <div className={style.center}>
        <h1  className={style.header_text}>focus Buddy</h1>
        <form>
            <label htmlFor="email"  className={style.label}>email:</label><br></br>
            <input id="email" name="email" className={style.input}></input><br></br>
            <label htmlFor="password"  className={style.label}>password:</label><br></br>
            <input id="password" className={style.input}></input><br></br><br></br>
            <div onClick={signUp}> <div className={style.button}>Sign Up</div></div><br></br>
            <div onClick={login}> <div className={style.button}>Sign In</div></div><br></br>
        </form>
        
    </div>
   )
}
export default auth;