import ChartComponent from "../components/chart/Chart";

//What it is to be outputed AKA DataPoints
{/*                                           paramters: time, max, min, absolute minimum  */}
console.log(datapoints(25, 90, 50, 4));


//function to generate data
function getRndInteger(min: number, max: number){
    max = max-min
    return Math.floor(Math.random() * max) + min;
}
 const maxValues: never[]=[]
 const minValues=[]
 const minAbsValues=[]


 const values=[
     {  
         //more focus required -> important study session -> Important Test study time
         maxValue: 95,
         minValue: 85,
         mAbsValue: 77,
     },
     {  //medium focus required -> medium study mode -> Review of Material
        maxValue: 80,
        minValue: 75,
        mAbsValue: 65,
    },
    {   //low focus required -> low study mode -> Homework or Intro to new material  
        maxValue: 70,
        minValue: 55,
        mAbsValue: 40,
    },
    {   //less distraction range -> intense study  -> Test your
        maxValue: 90,
        minValue: 85,
        mAbsValue: 80,
    },
    {   // medium distraction accepted -> medium intensity study -> Review material 
        maxValue: 90,
        minValue: 70,
        mAbsValue: 60,
    },
    {   // not much focus range required -> low intensity study ->  Shcheme through 
        maxValue: 90,
        minValue: 65,
        mAbsValue: 50,
    }
 ]

//function to start taking datapoint into the array
function datapoints (x: number, max: number, min: number, absoluteMin: number){
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
    return data;

}

const results = () =>{
return (
    <div>
     {/*                                           paramters: time, max, min, absolute minimum  */}
     {values.map( item =>
     (
        <ChartComponent name={'promodoro 1 session 1'} points={datapoints(50, item.maxValue, item.minValue, item.mAbsValue)}></ChartComponent>

     )
       )
     }
    </div>
);
}
export default results;