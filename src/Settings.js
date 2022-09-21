/* eslint-disable import/no-anonymous-default-export */
import React, { useContext, useEffect, useState } from "react";

import { AccountContext } from "./Account";
import ChangeEmail from "./ChangeEmail";
import ChangePassword from "./ChangePassword";

export default () => {
  const { getSession } = useContext(AccountContext);

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    getSession().then(() => {
      setLoggedIn(true);
    });
  }, []);

  return (
    <div className="settings">
      {loggedIn && (
        <>
          <h2>Settings</h2>
          <br />
          <ChangePassword />
          <br />
          <ChangeEmail />
        </>
      )}
    </div>
  )
};
