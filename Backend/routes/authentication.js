import express from "express";
import axios from "axios";

let router = express.Router();

router.post("/auth/simple/login", function (req, res) {
  let reqOptions = {
    method: "post",
    url: "https://unleash.shared.ecom.kkeu.de/auth/simple/login",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: JSON.stringify({
      username: req.body.email,
      password: req.body.password,
    }),
  };

  axios(reqOptions)
    .then((response) => {
      const cookies = response.headers["set-cookie"];
      res.setHeader("set-cookie", cookies);
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

export default router;
