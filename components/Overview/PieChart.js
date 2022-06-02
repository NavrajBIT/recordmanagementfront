import { useEffect, useState } from 'react';
import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJs.register(
  Tooltip, Title, ArcElement, Legend
);




function PieChart({value1, value2, value3}){
    const [data, setData] = useState({
        datasets: [{
            data: [value1 , value2, value3],
            backgroundColor:[
              '#1f2580',
              '#3d70a8',
              '#0b8de3'
            ]
        },
      ],
    });
    return (
      <>
        <Doughnut data={data}/>
      </>
    );
}

export default PieChart;
