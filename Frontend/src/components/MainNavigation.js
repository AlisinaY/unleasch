import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

import Form from "./AuthForm";
import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  const [isLogedin, setIsLogedin] = useState();
  const { username } = useSelector((state) => state.username);

  useEffect(() => {
    const userName = localStorage.getItem("username");
    setIsLogedin(userName);
  }, [username]);

  const logout = () => {
    localStorage.removeItem("username");
    setIsLogedin();
  };

  const header = (
    <>
      <header className={styles.header}>
        <ul className={styles["u-list"]}>
          {isLogedin && (
            <li className={styles["list-item"]}>
              <Link className={styles["link-tag"]} to="/features">
                Home
              </Link>
            </li>
          )}
          {isLogedin && (
            <li className={styles["list-item"]}>
              <Link className={styles["link-tag"]} to="/analyticpage">
                AnalyticPage
              </Link>
            </li>
          )}
          {isLogedin && (
            <li>
              <Link to="#" className={styles["link-tag"]}>
                <FontAwesomeIcon
                  onClick={logout}
                  className={styles["list-item_logout-icon"]}
                  icon={faSignOutAlt}
                />
              </Link>
            </li>
          )}
          {!isLogedin && (
            <li className={styles["list-item_login"]}>
              <Link className={styles["link-tag"]}>
                <FontAwesomeIcon icon={faSignInAlt} />
              </Link>
            </li>
          )}
        </ul>
      </header>
      {isLogedin && <Outlet />}
    </>
  );

  return (
    <>
      <div> {header} </div>
      {!isLogedin && <Form />}
    </>
  );
};

export default MainNavigation;
