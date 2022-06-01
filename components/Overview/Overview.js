import React from "react";

import PieChart from "./PieChart";
import Style from "./overview.module.css";

function Overview() {
  const fullTime = 5;
  const contractBased = 10;

  const male = 4;
  const female = 6;
  return (
    <>
      <div className={Style.overview}>
        <div className="heading">
          <h2>DashBoard</h2>
        </div>

        <h2>Total Employee : 20</h2>
        <div className={Style.totalEmployee}>
          <div className={Style.timeBased}>
            <PieChart
              fullTime={fullTime}
              // name1={"FullTime"}
              // name2={"ContractBased"}
              contractBased={contractBased}
            />
          </div>

          <div className={Style.genderBased}>
            <PieChart
              fullTime={male}
              // name1={"Male Employee"}
              // name2={"Female Employee"}
              contractBased={female}
            />
          </div>

          <div className={Style.genderBased}>
            <PieChart
              fullTime={male}
              // name1={"Male Employee"}
              // name2={"Female Employee"}
              contractBased={female}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Overview;
