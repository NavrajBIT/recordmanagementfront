import { useState, useEffect } from "react";
import styles from "./EmployeeAtandence.module.css";
import TableRow from "./TableRow";
import { empData } from "./employees";

const EmployeeAtendence = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth() + 1; // months are 0-based
  const [currentDNM, setCurrentDNM] = useState([currentYear, currentMonth]);
  // will calculate total no. of days
  const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
  }
  const [totalDays, setTotalDays] = useState(getDaysInMonth(currentDNM[0], currentDNM[1]));
  // to set total no. of days
  const updateDays = async(e) => {
    setCurrentDNM(e.target.value.split("-"));
  }

  useEffect(()=>{
    setTotalDays(getDaysInMonth(currentDNM[0], currentDNM[1]));
  },[currentDNM]);

  return (
    <div className={styles.atendencePage}>
      <span>
        <h3>Attendance Input</h3>
        <span>
          <label htmlFor="Month">Month & Year</label>
          <input type="month" onChange={(e) => updateDays(e)}/>
        </span>
      </span>
      <div className={styles.tablecontainor}>
      <table>
        <thead>
          <tr className={styles.tableheaders}>
            <th>S.no</th>
            <th>Unit</th>
            <th>Site</th>
            <th>Emp Code</th>
            <th>Name</th>
            {[...Array(totalDays)].map((date, index) => {
              return(
                <th key={index}>{index + 1}</th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {empData.map((emp, index) => {
            return (
              <TableRow
                key={index}
                sno={index}
                unit={emp.unit}
                site={emp.site}
                empcode={emp.empcode}
                name={emp.name}
                days={totalDays}
              />
            );
          })}
        </tbody>
      </table>
      </div>
    </div>
  );
};
export default EmployeeAtendence;
