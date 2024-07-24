import React from "react";
import { useSelector } from "react-redux";

import "./Features.module.css";

export default function Features() {
  const { features } = useSelector((state) => state.featureFlags);

  if (features) {
    var renderTable = features.map((item, index) => {
      const dateString = item.createdAt;
      const localDate = new Date(dateString);
      const result = localDate.toDateString();

      const date = new Date();
      const differenceInTime = date.getTime() - localDate.getTime();
      const differenceInWeeks = differenceInTime / (1000 * 3600 * 24 * 7);

      if (differenceInWeeks > 8) {
        return (
          <tr key={index}>
            <td
              onClick={() => {
                show(item.name);
              }}
            >
              {item.name}
            </td>
            <td> {item.type} </td>
            <td> {result} </td>
          </tr>
        );
      }
    });
  }

  return (
    <>
      {features && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th> CreatedAt</th>
            </tr>
          </thead>
          <tbody>{renderTable}</tbody>
        </table>
      )}
    </>
  );
}
