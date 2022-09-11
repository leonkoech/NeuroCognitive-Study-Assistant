import style from "./previous.module.scss"
import ChartComponent from "../components/chart/Chart";
import { datapoints } from "./results";
const values=
    {  
        //more focus required -> important study session -> Important Test study time
        maxValue: 80,
        minValue: 75,
        mAbsValue: 65,
        id: "anomaly"
    }


const anom=[75,77,75,76,79,75,75,75,76,78,77,79,75,79,75,75,67,64,60,57,54,56,60,63,66,70,74,77,75,79,79,78,75,79,79,78,75,78,75,79,79,77,75,77,68,74,74,65]
const previous = () =>{
lowdataset(anom, values.mAbsValue);
return (
    <div>
    <ChartComponent name={'promodoro 1 session 1'} points={[10.0, 20.2, 39.1, 21.4, 19.9, 20.2, 39.8, 18.6, 49.6]}></ChartComponent>
    <div className={[style.previous].join(" ")}>
        <h1>Session Summary</h1>
        <p>
            Have you ever read a webpage or document that used this text without paying much attention to it? The lorem ipsum is a placeholder text used in publishing and graphic design. This filler text is a short paragraph that contains all the letters of the alphabet. The characters are spread out evenly so that the reader’s attention is focused on the layout of the text instead of its content. Many software programs and applications have made it their default dummy text. Since the lorem ipsum is always used as a placeholder text, its use indicates that this is not a final version of a document, thus helping to avoid unnecessary printing.
        </p>
    </div>
        <ChartComponent name={'promodoro 1 session 1'} points={anom} id={values.id}></ChartComponent>
        <p>
            Based on the calculated results, you should study the topics at the following times of your focus activity: {lowdataset(anom, values.minValue)[0]}
        </p>
    </div>
);
}
export default previous;


//Variable that counts how many times you fell under the absolute minimun in focus
var low = values.mAbsValue;
function lowdataset (anom: string | any[], low:number){
    let result = []
    let secondRed = []
    for ( let i = 0; i< anom.length; i++ ){
            let value = anom[i];
            if (value < low){
                result.push(i)
                secondRed.push(Math.round(i / 10) * 10)
            }
        
        }
        return [result.join(" , "),secondRed]
    }



console.log(lowdataset(anom, values.minValue));
