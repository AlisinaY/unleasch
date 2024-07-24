import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { recievedFlagsFromServer } from "../store";

import Features from "../components/Features";

export default function Feature() {
  const dispatch = useDispatch();

  useEffect(() => {
    (async function () {
      const url = "http://localhost:5000/api/admin/projects/default";
      const res = await fetch(url, { credentials: "include" });
      const data = await res.json();
      console.log(data);
      dispatch(recievedFlagsFromServer(data));
    })();
  }, []);

  return <Features />;
}
