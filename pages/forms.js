import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Option from "../components/DashOption";
import AddEmployeeForm from "../components/Forms/AddEmployee/addEmployeeForm";
import ViewEmployeeForm from "../components/Forms/ViewEmployeement/viewEmployeeForm";
import EmployeeAtendence from "../components/Forms/EmployeeAtandence/employeeAtendence";
import ContactUs from "../components/Forms/ContactUs/contactUs";

const Form = () => {
  const [activeLink, setActiveLink] = useState("addEmployee");
  return (
    <>
      <Navbar />
      <div className="formbody">
        <div className="sidebar">
          <h1>Dashboard</h1>
          <Option title={"Add Employee"} onClick={() => setActiveLink("addEmployee")}/>
          <Option title={"View Employee"} onClick={() => setActiveLink("viewEmployee")}/>
          <Option title={"Employee"} onClick={() => setActiveLink("employeeatendence")}/>
          <Option title={"Contact Us"} onClick={() => setActiveLink("contactus")}/>
        </div>        
        {activeLink === "addEmployee" && <AddEmployeeForm />}
        {activeLink === "viewEmployee" && <ViewEmployeeForm />}
        {activeLink === "employeeatendence" && <EmployeeAtendence />}
        {activeLink === "contactus" && <ContactUs />}
      </div>
    </>
  );
}

export default Form;