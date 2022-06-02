import React from "react";
import PieChart from "./PieChart";
import Style from "./overview.module.css";

const Overview = () => {
  const totalemp =  {
    male: "10",
    female: "14",
    contractBased: "9",
    fulltime: "4",
    outsource: "3",
    site1: "5",
    site2: "3",
    site3: "8"
  }
  return (
    <>
    <div className={Style.background}>
      <div className={Style.overview}>
        <h2>HUGHES DASHBOARD</h2>
        <hr />
        <h3 className={Style.innerHeading}>Total number of employees : 50</h3>
        <div className={Style.totalEmployee}>
          
          {/* timebased */}
          <div className={Style.piecard}>
            <div className={Style.lables}>
              <h3>Fulltime Employees: {totalemp.fulltime}</h3>
              <h3>Contractual Employees: {totalemp.contractBased}</h3>
              <h3>Out sourced Employees: {totalemp.outsource}</h3>
            </div>
            <div className={Style.pie}>
              <PieChart value1={totalemp.fulltime} value2={totalemp.contractBased} value3={totalemp.outsource}/>
            </div>
          </div>
          
          {/* genderbased */}
          <div className={Style.piecard}>
            <div className={Style.lables}>
              <h3>Male Employees: {totalemp.male}</h3>
              <h3>Female Employees: {totalemp.female}</h3>
            </div>
            <div className={Style.pie}>
              <PieChart value1={totalemp.male} value2={totalemp.female} />
            </div>
          </div>
          
          {/* Sitebased */}
          <div className={Style.piecard}>
            <div className={Style.lables}>
              <h3>Site 1 Employee: {totalemp.site1}</h3>
              <h3>Site 2 Employee: {totalemp.site2}</h3>
              <h3>Site 3 Employee: {totalemp.site3}</h3>
            </div>
            <div className={Style.pie}>
              <PieChart value1={totalemp.site1} value2={totalemp.site2} value3={totalemp.site3} />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Overview;
