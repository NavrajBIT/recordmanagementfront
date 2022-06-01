import { useEffect, useState }  from 'react';
 
import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import React from 'react';

ChartJs.register(
  Tooltip, Title, ArcElement, Legend
);


  
ChartJs.defaults.font.size = 16;


const data = {
    datasets: [{
        data: [10, 20, 30],
        backgroundColor:[
          'red',
          'blue',
          
        ]
        
    },
  ]
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
      ]
     
    });

    return (
        <>
          <Doughnut data={data}/>
        </>
        
      );

}

export default PieChart;  