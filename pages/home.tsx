import Button from "../components/Button/Button";

const home=()=>{
   return (
    <div>
        <a href="./session">
            <Button text="start new session" type="dark"></Button>
        </a>
        <a href="./previous" >
        <Button text="view previous sessions" type="light"></Button>
        </a>
    </div>
   )
}
export default home;