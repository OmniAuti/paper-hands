import NavBar from "../components/NavBar.js";
import Header from "../components/Header.js";

import styles from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div>
      <Header />
      <NavBar />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
