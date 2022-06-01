import styles from "./EmployeeAtandence.module.css";
import TableRow from "./TableRow";
import { empData } from "./employees";

const employeeAtendence = () => {
  return (
    <div className={styles.atendencePage}>
      <span>
        <h3>Attendance Input</h3>
        <span>
          <label htmlFor="Month">Month & Year</label>
          <input type="month"/>
        </span>
      </span>
      <table>
        <thead>
          <tr className={styles.tableheaders}>
            <th>S.no</th>
            <th>Unit</th>
            <th>Site</th>
            <th>Emp Code</th>
            <th>Name</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
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
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default employeeAtendence;
