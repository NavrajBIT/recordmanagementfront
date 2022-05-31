import "../styles/globals.css";
import "../styles/formpage.css";
import UserState from "../context/User/UserState";

const MyApp = ({ Component, pageProps }) => {
  return (
    <UserState>
    <Component {...pageProps} />
    </UserState>
  );
}

export default MyApp;