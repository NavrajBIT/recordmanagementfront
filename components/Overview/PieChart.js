import { useEffect, useState } from 'react';
import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJs.register(
  Tooltip, Title, ArcElement, Legend
);


const data = {
    datasets: [{
        data: [10, 20, 30],
        backgroundColor:[
          'red',
          'blue', 
        ]
    },
  ],
  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
      'Red',
  ], 
  };


function PieChart(props){
    const [data, setData] = useState({
        datasets: [{
            data: [props.fullTime , props.contractBased],
            backgroundColor:[
              'red',
              'blue'
            ]
        },
      ],
      // labels: [
      //     props.name1,
      //     props.name2
      // ], 
    });

    return (
        <>
          <Doughnut data={data}/>
        </>
        
      );

}

export default PieChart;
