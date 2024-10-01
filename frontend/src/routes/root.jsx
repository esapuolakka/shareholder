import { Outlet } from "react-router-dom";
import HeaderNavBar from "../components/Header";

export async function loader() {
  return null;
}

const Root = () => {
  return (
    <>
      <HeaderNavBar />
      <Outlet />
    </>
  );
};

export default Root;
