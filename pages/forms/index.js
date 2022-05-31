import AddEmployeeForm from "./addEmployeeForm";
import ViewEmployeeForm from "./viewEmployeeForm";
import EmployeeAtendence from "./employeeAtendence";
import ContactUs from "./contactUs";
import { createContext, useContext } from "react";
import AppContext from "../AppContext";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { addEmployeeFormData } from "../../formdata";

export default function Home() {
  const [activeLink, setActiveLink] = useState("addEmployee");
  const userState = useContext(AppContext);
  const router = useRouter();
  useEffect(() => {
    if (userState.userName === "Default") {
      router.push("/");
    }
  }, []);
  const Navbar = () => {
    return (
      <>
        <div className="navbar">
          <div className="navbar-left">
            <img
              src="https://www.hugheschem.com/images/logo.webp"
              alt="Hughes Chem"
              width="150"
              height="50"
            />
          </div>
          <div className="navbar-right">
            <div style={{ margin: "0px 20px" }}>{userState.userName}</div>
            <div style={{ margin: "0px 20px" }}>
              <button
                onClick={() => {
                  router.push("/");
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };

  const Sidebar = () => {
    return (
      <>
        <div className="sidebar">
          <h1>Dashboard</h1>
          <div className="sidebar-item" onClick={() => setActiveLink("addEmployee")}>Add Employee</div>
          <div className="sidebar-item" onClick={() => setActiveLink("viewEmployee")}>View Employee</div>
          <div className="sidebar-item" onClick={() => setActiveLink("employeeatendence")}>Employee Attendence</div>
          <div className="sidebar-item" onClick={() => setActiveLink("contactus")}>Contact Us</div>
        </div>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="formbody">
        <Sidebar />
        {activeLink === "addEmployee" && <AddEmployeeForm />}
        {activeLink === "viewEmployee" && <ViewEmployeeForm />}
        {activeLink === "employeeatendence" && <EmployeeAtendence />}
        {activeLink === "contactus" && <ContactUs />}
      </div>
    </>
  );
}
