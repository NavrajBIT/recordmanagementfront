import { useEffect, useState } from 'react';
import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJs.register(
  Tooltip, Title, ArcElement, Legend
);




function PieChart(props){
    const [data, setData] = useState({
        datasets: [{
            data: [props.fullTime , props.contractBased],
            backgroundColor:[
              'blue',
              ' #00e7e7'
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
