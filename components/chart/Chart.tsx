import Chart from 'chart.js/auto'
import { useEffect, useRef } from "react";

type Props  = {
    name: string,
    points: number [],
    id: string
}

const createYAxis = (data: number []) => {
    // function to create the Y axis
    let yList=[]
    for (let i=1; i<=data.length; i++){
            yList.push("minutes "+i)
    }
    return yList

}

function ChartComponent ({ name, points,id }: Props) {
 const canvasEl =  useRef<HTMLCanvasElement>(null);

 const colors = {
    purple: {
      default: "rgba(149, 76, 233, 1)",
      half: "rgba(149, 76, 233, 0.5)",
      quarter: "rgba(149, 76, 233, 0.25)",
      zero: "rgba(149, 76, 233, 0)"
    },
    indigo: {
      default: "rgba(80, 102, 120, 1)",
      quarter: "rgba(80, 102, 120, 0.25)"
    }
}; 

useEffect(() => {
       
    
    // const ctx = document.getElementById("myChart");
    // const canvas = canvasEl.current;
    // if (canvas == null) return; // current may be null
    // const context = canvas.getContext("2d");
    // if (context == null) return; // context may be null
    // var context = document.getElementById('myChart');

    const ctx = document.getElementById(id) as HTMLCanvasElement;;


    // const gradient = context?.createLinearGradient(0, 16, 0, 600);

// :) :D :/ :o :{ XD >.< :-) :O ;) O.O 
    // gradient.addColorStop(0, colors.purple.half);
    // gradient.addColorStop(0.65, colors.purple.quarter);
    // gradient.addColorStop(1, colors.purple.zero);

    const weight = points;
    const labels = createYAxis(points)
    const data =  {
          labels: labels,
          datasets: [{
              label: name,
              data: weight,
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
              borderWidth: 1
          }]
      }
  const options= {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }

    const config = {
      type: 'line',
      data: data,
      options: options
    };
    const myLineChart = new Chart(ctx, config as any);

    return function cleanup() {
      myLineChart.destroy();
    };
  });

  return (
    <div className="App">
      <span>Chart.js x</span>
      <canvas id={id} ref={canvasEl} height="100" />
    </div>
  );
}
export default ChartComponent;