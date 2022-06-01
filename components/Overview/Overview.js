import React from "react";
import PieChart from "./PieChart";
import Style from "./overview.module.css";

const Overview = () => {
  const fullTime = 15;
  const contractBased = 10;
  const male = 34;
  const female = 16;
  return (
    <>
    <div className={Style.background}>

      <div className={Style.overview}>
        <div className="heading">
          <h2>DASHBOARD</h2>
        </div>
        

        <h2>TOTAL EMPLOYEE : 20</h2>
        <hr />

        <div className={Style.totalEmployee}>
          <div className={Style.timeBased}>
            <div className={Style.lables}>
              <h3>Full Time</h3>
              <h3>Part Time</h3>
            </div>

            <div className={Style.pie}>
              <PieChart fullTime={fullTime} contractBased={contractBased} />
            </div>
          </div>

          <div className={Style.genderBased}>
            <div className={Style.lables}>
              <h3>Male Employee</h3>
              <h3>Female Employee</h3>
            </div>
            <div className={Style.pie}>
              <PieChart fullTime={male} contractBased={female} />
            </div>
          </div>

          <div className={Style.genderBased}>
            <div className={Style.lables}>
              <h3>Male Employee</h3>
              <h3>Female Employee</h3>
            </div>
            <div className={Style.pie}>
              <PieChart fullTime={male} contractBased={female} />
            </div>
          </div>


        </div>

        
      </div>
    </div>
    </>
  );
};

export default Overview;
