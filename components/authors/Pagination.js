import { useRouter } from "next/router";
import React from "react";

const Pagination = ({ infoPerPage, totalData, paginate, loading }) => {
  const pageNumbers = [];
  const router = useRouter();

  for (let i = 1; i <= Math.ceil(totalData / infoPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="flex items-center justify-center space-x-3 mt-10">
      {pageNumbers.map((number) => (
        <a
          key={number}
          onClick={() => paginate(number)}
          className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white cursor-pointer"
        >
          Page {number}
        </a>
      ))}
      {!loading && (
        <a
          onClick={() => router.back()}
          className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white cursor-pointer"
        >
          Back to dashboard
        </a>
      )}
    </div>
  );
};

export default Pagination;
