import axios from "axios";
import { useLoaderData } from "react-router-dom";
import AddNew from "../components/AddNew";

export async function loader() {
  // TODO: Hardcoded API
  // Fix it later with .env file + config
  const response = await axios({
    method: "get",
    url: "http://localhost:8080/api/persons",
  });
  return response.data;
}

const LisaaUusi = () => {
  const persons = useLoaderData();
  return (
    <>
      <h1>Lisää uusi</h1>
      <AddNew persons={persons} />
    </>
  );
};

export default LisaaUusi;
