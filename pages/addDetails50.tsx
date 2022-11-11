import style from '../components/styles/main.module.scss'




function getValues(array:string[]){
    const finalArr=[]
    if(typeof window !== "undefined"){
        for(let i=0;i<array.length;i++){
             const element = document.getElementById(array[i])
            finalArr.push(element?.nodeValue);
        }
          
    }
    console.log(finalArr)
    return finalArr
}

const AddDetails50=()=>{
    return (
   
         
            <div className={style.center}>
                <h1>Add time blocks of your session</h1>
                 <div>
                        <label  className={style.label}>0-10</label>
                        <br></br>
                        <input className={style.input} id="10"></input>
                    </div>
                    <br></br>
                    <div>
                    <label  className={style.label}>10-20</label>
                    <br></br>
                    <input className={style.input} id="20"></input>
                </div>
                <br></br>
                <div>
                <label  className={style.label}>20-30</label>
                <br></br>
                <input className={style.input} id="30"></input>
            </div>
            <br></br>
            <div>
                        <label  className={style.label}>30-40</label>
                        <br></br>
                        <input className={style.input} id="40"></input>
                    </div>
                    <br></br>
                    <div>
                        <label  className={style.label}>40-50</label>
                        <br></br>
                        <input className={style.input} id="50"></input>
                    </div>
                    <div>
                        <a href='./counter'><div className={style.button} >start timer</div></a>
                    </div>
            </div>
            // <div></div>

    )
    
}


export default AddDetails50;