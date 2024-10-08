import { useLoaderData } from "react-router-dom";
import api from "../api";
import Charts from "../components/Charts";

export async function loader() {
  const { data: top5Data } = await api.get("/persons/top5");
  const top5DataWithName = top5Data.map(([etunimi, sukunimi, amount]) => [
    `${etunimi} ${sukunimi}`,
    amount,
  ]);
  const { data: totalShareOwners } = await api.get("/shareownership/count");
  const { data: averagePerYear } = await api.get("/shareprice/averageperyear");
  return { top5Data: top5DataWithName, totalShareOwners, averagePerYear };
}

const Dashboard = () => {
  const data = useLoaderData();

  return (
    <>
      <h1>Dashboard</h1>
      <Charts data={data} />
    </>
  );
};

export default Dashboard;
