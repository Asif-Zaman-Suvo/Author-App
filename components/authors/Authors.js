import axios from "axios";
import React, { useState, useEffect } from "react";
import ListItemComponent from "./ListItemComponent";

const Authors = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("https://api.quotable.io/authors?skip=20")
      .then((res) => {
        setData(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 text-center text-3xl">
      {data.map((result) => (
        <ListItemComponent key={result._id} result={result}></ListItemComponent>
      ))}
    </div>
  );
};

export default Authors;
