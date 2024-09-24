import { useLoaderData } from "react-router-dom";
import AddNew from "../components/AddNew";
import api from "../api";

export async function loader() {
  const response = await api.get("/persons");
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
