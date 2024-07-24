import express from "express";
import axios from "axios";

let router = express.Router();

router.get("/api/admin/projects/default", (req, res) => {
  axios
    .get("https://unleash.shared.ecom.kkeu.de/api/admin/projects/default", {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        Cookie: req.headers.cookie,
      },
    })
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

export default router;
