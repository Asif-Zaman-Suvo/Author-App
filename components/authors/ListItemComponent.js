import React from "react";

const ListItemComponent = ({ result }) => {
  return (
    <div className="flex justify-center">
      <div className="rounded-lg shadow-lg bg-red-200 max-w-sm">
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium">{result.name}</h5>
          <span className="text-sm mb-4 font-serif text-black">{result.description}</span>
          <p className="text-gray-700 text-base my-8">{result.bio}</p>
          <p className="text-black text-xl mb-4">
            <a href={result.link}>Wikipedia Link</a>
          </p>
          <button
            type="button"
            className="cursor-pointer inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Add to Favourite
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListItemComponent;
