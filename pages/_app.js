import "../styles/globals.css";
import { createContext, useEffect, useState } from "react";
export const UserFavourite = createContext();

function MyApp({ Component, pageProps }) {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const my = JSON.parse(localStorage.getItem("favourites"));
    if (my) {
      setFavourites(my);
    }
  },[]);

  return (
    <>
      <UserFavourite.Provider value={[favourites, setFavourites]}>
        <Component {...pageProps} />
      </UserFavourite.Provider>
    </>
  );
}

export default MyApp;
