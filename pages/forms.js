import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import AddEmployeeForm from "../components/Forms/AddEmployee/addEmployeeForm";
import ViewEmployeeForm from "../components/Forms/ViewEmployeement/viewEmployeeForm";
import EmployeeAtendence from "../components/Forms/EmployeeAtandence/employeeAtendence";
import ContactUs from "../components/Forms/ContactUs/contactUs";
import Overview from "../components/Overview/Overview";


const Form = () => {
  const [activeLink, setActiveLink] = useState("addEmployee");
  return (
    <>
      <Navbar />
      <div className="formbody">
        <div className="sidebar">
          <h1>Dashboard</h1>
          <div className="sidebar-item" onClick={() => setActiveLink("overView")}>Overview</div>
          <div className="sidebar-item" onClick={() => setActiveLink("addEmployee")}>Add Employee</div>
          <div className="sidebar-item" onClick={() => setActiveLink("viewEmployee")}>View Employee</div>
          <div className="sidebar-item" onClick={() => setActiveLink("employeeatendence")}>Employee Atendence</div>
          <div className="sidebar-item" onClick={() => setActiveLink("contactus")}>Contact Us</div>
        </div>        

        {activeLink === "overView" && <Overview/>}
        {activeLink === "addEmployee" && <AddEmployeeForm />}
        {activeLink === "viewEmployee" && <ViewEmployeeForm />}
        {activeLink === "employeeatendence" && <EmployeeAtendence />}
        {activeLink === "contactus" && <ContactUs />}
      </div>
    </>
  );
}

export default Form;