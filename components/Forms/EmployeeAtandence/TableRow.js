import styles from './EmployeeAtandence.module.css';
const TableRow = ({sno, unit, site, empcode, name}) => {
  return (
    <tr className={styles.tdata}>
      <td>{sno + 1}</td> {/* s.no */}
      <td>{unit}</td> {/* unit */}
      <td>{site}</td> {/* site */}
      <td>{empcode}</td> {/* emp code */}
      <td>{name}</td> {/* name */}
      <td>
        <select name="pora">
          <option value="absent">A</option>
          <option value="present">P</option>
        </select>
      </td>
      <td>
        <select name="pora">
          <option value="absent">A</option>
          <option value="present">P</option>
        </select>
      </td>
      <td>
        <select name="pora">
          <option value="absent">A</option>
          <option value="present">P</option>
        </select>
      </td>
      <td>
        <select name="pora">
          <option value="absent">A</option>
          <option value="present">P</option>
        </select>
      </td>
      <td>
        <select name="pora">
          <option value="absent">A</option>
          <option value="present">P</option>
        </select>
      </td>
    </tr>
  );
};
export default TableRow;
