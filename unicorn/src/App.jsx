import "./App.css";
import { Outlet } from "react-router";
import { CartContextProvider } from "./Context/context";
import { useEffect } from "react";
import setScreenSize from "./functions";
import { refreshToken } from "./api/user";

function App() {
  useEffect(() => {
    setScreenSize();
  });
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      refreshToken();
    }
  }, []);

  return (
    <CartContextProvider>
      <Outlet />
    </CartContextProvider>
  );
}

export default App;
