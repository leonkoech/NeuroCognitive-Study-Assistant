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
        <ChartComponent name={'promodoro 1 session 1'} points={anom} id={values.id}></ChartComponent>
        <p>
            Based on the calculated results, you should study the topics at the following times of your focus activity. {lowdataset(anom, values.minValue)[0]}
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
