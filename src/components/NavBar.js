import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={styles.nav}>
      <Link to="/paper-hands">
        <div className={styles.link}>
          <div className={styles.home}></div>
        </div>
      </Link>
      <Link to="/paper-hands/trade">
        <div className={styles.link}>
          <div className={styles.trade}></div>
        </div>
      </Link>
      <Link to="/paper-hands/news">
        <div className={styles.link}>
          <div className={styles.news}></div>
        </div>
      </Link>
      <Link to="/paper-hands/notifications">
        <div className={styles.link}>
          <div className={styles.bell}></div>
        </div>
      </Link>
    </div>
  );
};

export default NavBar;
