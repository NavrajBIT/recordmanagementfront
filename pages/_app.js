import "../styles/globals.css";
import "../styles/formpage.css";

import AppContext from "./AppContext";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [userName, setUserName] = useState("Default");

  return (
    <AppContext.Provider
      value={{
        userName: userName,
        setUserName: setUserName,
      }}
    >
      <Component {...pageProps} />;
    </AppContext.Provider>
  );
}

export default MyApp;
