import React, { useContext, useState } from "react";
import { UserFavourite } from "../../pages/_app";
import SingleFavouriteAuthor from "./SingleFavouriteAuthor";
import { useRouter } from "next/router";

const FavouriteAuthors = () => {
  const router = useRouter();
  const [favourites, setFavourites] = useContext(UserFavourite);
  console.log("add to favourite", favourites);

  //delete a author

  function deleteAuthor(_id) {
    const updatedAuthor = favourites.filter((author) => author._id !== _id);
    setFavourites(updatedAuthor);
  }

  return (
    <section>
      <div className="text-center text-3xl mt-5">Favourite Authors List</div>
      <div className="text-center mt-5">
        <a
          onClick={() => router.back()}
          className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white cursor-pointer"
        >
          Back to dashboard
        </a>
      </div>
      <div className="mx-auto px-8 py-8 grid grid-cols-4 gap-4 text-center text-3xl">
        {favourites.map((result) => (
          <SingleFavouriteAuthor
            deleteAuthor={deleteAuthor}
            result={result}
            key={result._id}
          ></SingleFavouriteAuthor>
        ))}
      </div>
    </section>
  );
};

export default FavouriteAuthors;
