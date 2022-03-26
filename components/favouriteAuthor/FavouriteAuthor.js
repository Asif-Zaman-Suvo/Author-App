import React, { useContext } from "react";
import { UserFavourite } from "./../../pages/_app";
import SingleFavouriteAuthor from "./SingleFavouriteAuthor";

const FavouriteAuthor = () => {
  const [favourites, setFavourites] = useContext(UserFavourite);
  console.log("add to favourite", favourites);

  
  return (
    <div className="mx-auto px-8 py-8 grid grid-cols-4 gap-4 text-center text-3xl">
       <span className="text-center"> Favourite Author Lists</span>
      {favourites.map((result) => (
        <SingleFavouriteAuthor
          result={result}
          key={result._id}
        ></SingleFavouriteAuthor>
      ))}
    </div>
  );
};

export default FavouriteAuthor;
