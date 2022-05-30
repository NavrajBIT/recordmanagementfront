export default function Home() {
  return (
    <>
      <div className="logo">
        <img
          src="https://beimagine.tech/wp-content/uploads/2022/04/BITlogo.png"
          alt=""
          width="150px"
        />
      </div>
      <div className="clientlogo">
        <img
          // src="https://www.waxpolhotels.com/wp-content/uploads/2018/07/logo-2.png"
          src="https://www.hugheschem.com/images/logo.webp"
          alt=""
          width="300px"
        />
      </div>

      <div className="login-page">
        <div className="login-container">
          <h1>Login Details</h1>

          <div className="inputField">
            <input
              type="text"
              placeholder="Your username"
              style={{ backgroundImage: "url('./username.svg')" }}
            />
          </div>
          <div className="inputField">
            <input type="text" placeholder="Password" />
          </div>

          <div className="checkbox">
            <input type="checkbox" placeholder="Your Password" /> Remember me
          </div>
          <button
            onClick={() => {
              alert("Work in progress.");
            }}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}
