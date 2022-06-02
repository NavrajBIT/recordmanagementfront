import AddEmployeeForm from "./employeeData";
import { createContext, useContext } from "react";
import AppContext from "../../AppContext";
import { useRouter } from "next/router";
​
export default function Home() {
  const userState = useContext(AppContext);
  const router = useRouter();
​
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
            <div style={{ margin: "0px 20px" }}>Harish Kumar</div>
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
​
  return (
    <>
      <Navbar />
      <div className="formbody">
        <AddEmployeeForm />
      </div>
    </>
  );
}