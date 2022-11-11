import Button from "../components/Button/Button";
import style from "../components/styles/main.module.scss"
const home=()=>{
   return (
    <div className={style.center}>
        <a href="./session" className={style.session}>
            <span>Start new session</span>
        </a>
        <br></br>
        <a href="./results" className={style.session}>
            <span>See previous sessions</span>
        </a>
    </div>
   )
}
export default home;