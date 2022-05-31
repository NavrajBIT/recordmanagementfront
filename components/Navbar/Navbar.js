import { useContext } from 'react';
import Router from 'next/router';
import userContext from '../../context/User/userContext';

const Navbar = () => {
  const user = useContext(userContext); 
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
          {user.userName}
          <div style={{ margin: "0px 20px" }}>
            <button
            onClick={() => {
              Router.push("/");
            }}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;