import express from "express";

import axios from "axios";

let router = express.Router();

router.get("/events", (req, res) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "user:fcba7c174ba5c35ad5c9fc5d5a3649148a0d94a5d2c36f232b01dd1f",
    },
  };

  axios
    .get("https://unleash.shared.ecom.kkeu.de/api/admin/events", config)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

export default router;
