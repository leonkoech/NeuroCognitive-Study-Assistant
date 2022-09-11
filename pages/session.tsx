import Link from "next/link";
import Button from "../components/Button/Button";
import style from "../components/styles/main.module.scss"
import AddDetails from "./addDetails25";



let type:number = 0;

function select(id: number){
    if(typeof window !== "undefined"){
         var short = document.getElementById('short');
         var long = document.getElementById('long');
        if(id==1 ){
            short!.style.color = 'black';
            short!.style.backgroundColor = 'white';
            type=25;

            long!.style.color = 'white'
            long!.style.backgroundColor = 'black';
           
        }
        else{
            long!.style.color = 'black';
            long!.style.backgroundColor = 'white';
            type=50;

            short!.style.color = 'white'
            short!.style.backgroundColor = 'black';
        }
    }
   
}


const session = () =>{
    let test = 0;
    
        return (
            
           
<div className={style.center}>
    <h1>start session</h1>
    <label htmlFor="sessionTopic"> session Topis</label>
    <input id="sessionTopic" className={style.input}></input>
    <h2>Select study session Length</h2>
    <div>
        <a href="./addDetails25" ><div className={style.button}>25 Minutes</div></a>
        <a href="./addDetails50" ><div className={style.button}>50 minutes</div></a>
    </div>
    <div>
    </div>
</div>

        )
     


}
export default session;