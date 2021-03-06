import axios from "axios";
import React, { useState, useEffect } from "react";
import Spinner from "../../pages/common/Spinner/Spinner";
import ListItemComponent from "./ListItemComponent";
import Pagination from "./Pagination";

const Authors = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [infoPerPage] = useState(4);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://api.quotable.io/authors?skip=20")
      .then((res) => {
        setData(res?.data.results);
        return res;
      })
      .catch((err) => {
        console.log(err);
        return Promise.reject(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  //Get current data

  const indexOfLastData = currentPage * infoPerPage;
  const indexOfFirstData = indexOfLastData - infoPerPage;
  const currentData = data.slice(indexOfFirstData, indexOfLastData);

  // changing the page number
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {loading ? (
        <div className="mt-24">
          <Spinner />
        </div>
      ) : (
        <div className="mx-auto px-8 py-8 grid grid-cols-4 gap-4 text-center text-3xl">
          {currentData.map((result) => (
            <ListItemComponent
              key={result._id}
              result={result}
            ></ListItemComponent>
          ))}
        </div>
      )}
      <Pagination
        paginate={paginate}
        infoPerPage={infoPerPage}
        totalData={data.length}
        loading={loading}
      />
    </>
  );
};

export default Authors;
