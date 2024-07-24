import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isLogedin } from "../store";

export default function Authentication() {
  const dispatch = useDispatch();
  const { username, password } = useSelector(
    (state) => state.usernameAndPassword
  );

  useEffect(() => {
    if (username && password) {
      const url = "http://localhost:5000/auth/simple/login";
      const requestOptions = {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email: username, password: password }),
      };
      async function sendReq() {
        const respons = await fetch(url, requestOptions);
        const responsData = await respons.json();

        if (responsData.imageUrl) {
          localStorage.setItem("username", username);
          dispatch(isLogedin(username));
        }
      }

      sendReq();
    }
  }, [username, password]);
}
