import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import HeaderNavBar from "../components/Header";

export async function loader() {
  return null;
}

const Root = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/home")
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <HeaderNavBar />
      <Outlet />
    </>
  );
};

export default Root;
