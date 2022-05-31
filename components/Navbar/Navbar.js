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

export default Navbar;