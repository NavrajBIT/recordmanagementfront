import AddEmployeeForm from "./addEmployeeForm";

export default function Home() {
  const Navbar = () => {
    const hr = "Harish Kumar";
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
            <div style={{ margin: "0px 20px" }}>{hr}</div>
            <div style={{ margin: "0px 20px" }}>
              <button>Logout</button>
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
