import ChartComponent from "../components/chart/Chart";
import style from "../components/styles/main.module.scss"
import Previous from "./previous";

//What it is to be outputed AKA DataPoints
{/*                                           paramters: time, max, min, absolute minimum  */}
console.log(datapoints(25, 90, 50, 4));


//function to generate data
function getRndInteger(min: number, max: number){
    max = max-min
    return Math.floor(Math.random() * max) + min;
}
 const maxValues: never[]=[]
 const minValues: never[]=[]
 const minAbsValues=[]


 const values=[
     {  
         //more focus required -> important study session -> Important Test study time
         maxValue: 95,
         minValue: 85,
         mAbsValue: 77,
         id: "normalChart",
         text: "Your study session went partly well"
     },
     {  
        //more focus required -> important study session -> Important Test study time
        maxValue: 95,
        minValue: 85,
        mAbsValue: 77,
        id: "normalChart1"
    },
    {  
        //more focus required -> important study session -> Important Test study time
        maxValue: 95,
        minValue: 85,
        mAbsValue: 77,
        id: "normalChart2"
    }
 ]

//function to start taking datapoint into the array
export function datapoints (x: number, max: number, min: number, absoluteMin: number){
    // x represents the time people should study, in the 1st place 25min or 50min

    // quality study 
    // var item = values[0]
    // max = values[0].maxValue;
    // min = ;
    // var absoluteMin = ;
    
    //array where datapoints are to be stored
    let data = [];

    // for loop for minutes - 5 ( ie. 20 min || 45 min)

    for ( let i = 1; i< x-5 ; i++ ){
        // append datapoints to data array
        data.push(getRndInteger(min, max));
    }
    
    //variable for the last index of existing array 
    var last = data[data.length -1];

    // for loop for the last 4 digits (NOT counting absolute last number though ie. 21, 22, 23, 24 || 41, 42, 43, 44)

    for (let i = 0; i < 3; i++){
        data.push(getRndInteger(last, absoluteMin));
    }

    //getting ABSOLUTE last number into the data array (ie 25 || 50)
    data.push(absoluteMin);

    //output the whole data array
    console.log(data.toString());
    return data;

}

const results = () =>{
return (
    <div>
     {/*                                           paramters: time, max, min, absolute minimum  */}
     <Previous></Previous>
     <div>
        {values.map( item =>
     (
        <ChartComponent name={'promodoro 1 session 1'} points={datapoints(50, item.maxValue, item.minValue, item.mAbsValue)} id={item.id} text={"Study session went partly well. The session had a balance between two data points and it seems you made a good progress on your activity."}></ChartComponent>

     )
       )
     }
     </div>
     
    </div>
);
}
export default results;


// values on the data set (to compare to less than lowest number)
let low = minValues;



//funcion with parameter of low datasets and lower (limit entrance)
function lowMaterial(datapoints: any[], low: number){

    for ( let i = 0; i < low; i++){
        //array where the index or min are passed in 
        let minReview = []
        // datapoints value
        let value = datapoints[i];
        //if low is law material is less than minValues store it
        if (value < low){
            minReview.push(i);
        }
        return minReview;
    }
    lowMaterial(datapoints,low);
    }