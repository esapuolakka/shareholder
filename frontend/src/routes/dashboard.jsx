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
  const { data: latestPrice } = await api.get("/shareprice/latest", {
    timeout: 5000,
  });
  const { data: totalSharesPerYear } = await api.get("/totalshares/peryear");
  const { data: companyData } = await api.get("/company");

  return {
    top5Data: top5DataWithName,
    totalShareOwners,
    averagePerYear,
    latestPrice,
    totalSharesPerYear,
    companyData,
  };
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
