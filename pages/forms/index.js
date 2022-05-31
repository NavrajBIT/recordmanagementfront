import AddEmployeeForm from "./addEmployeeForm";
import { createContext, useContext } from "react";
import AppContext from "../AppContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
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
          <div className="sidebar-item">Add Employee</div>
          <div className="sidebar-item">View Employee</div>
          <div className="sidebar-item">Employee Attendence</div>
          <div className="sidebar-item">Contact Us</div>
        </div>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="formbody">
        <Sidebar />
        <AddEmployeeForm />
      </div>
    </>
  );
}
