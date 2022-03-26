import "../styles/globals.css";
import { createContext, useEffect, useState } from "react";
export const UserFavourite = createContext();

function MyApp({ Component, pageProps }) {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("favourites"));
    if (items) {
      setFavourites(items);
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
