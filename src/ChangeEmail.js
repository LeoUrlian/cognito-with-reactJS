import { CognitoUserAttribute } from "amazon-cognito-identity-js"
import React, { useContext, useState } from "react";

import { AccountContext } from "./Account";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [newEmail, setNewEmail] = useState("")
  const [password, setPassword] = useState("")

  const { getSession, authenticate } = useContext(AccountContext);

  const onSubmit = (event) => {
    event.preventDefault();

    getSession().then(({ user, email }) => {
      authenticate(email, password).then(() => {
        const attributes = [
          new CognitoUserAttribute({ Name: "email", Value: newEmail }),
        ];

        user.updateAttributes(attributes, (err, results) => {
          if (err) {
            console.error(err);
          } else {
            console.log(results);
          }
        });
      });
    });
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>New Email</label>
        <input
          value={newEmail}
          onChange={(event) => setNewEmail(event.target.value)}
        />

        <label>Current Password</label>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button type="submit">Change password</button>
      </form>
    </div>
  );
};