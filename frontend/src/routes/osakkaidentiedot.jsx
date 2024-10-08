import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import OwnerDetails from "../components/OwnerDetails";
import PropagateLoader from "react-spinners/PropagateLoader";
import styles from "../components/OwnerDetails.module.css";
import api from "../api";

export async function loader({ params }) {
  const { id } = params;
  try {
    // all owners
    const ownersResponse = await api.get(`/persons`);
    const owners = ownersResponse.data;

    // If id is not provided, return just the owners list
    if (!id) {
      return { owner: null, owners, shareOwnerships: [], transactions: [] };
    }

    // one owner
    const ownerResponse = await api.get(`/persons/${id}`);
    const person = ownerResponse.data;

    // individual owner's shares
    const sharesResponse = await api.get(
      `/shareownership/persons/${id}/shares`
    );
    const shareOwnerships = sharesResponse.data;

    // individual owner's transactions
    const transactionsResponse = await api.get(
      `/transactions/persons/${id}/transactions`
    );
    const transactions = transactionsResponse.data;

    // Return separate objects for owner, share ownerships and transactions
    return {
      owner: {
        id: person.id,
        firstname: person.firstname ?? "Tietoa ei löydy tietokannasta",
        lastname: person.lastname ?? "Tietoa ei löydy tietokannasta",
        ssn: person.ssn ?? "Tietoa ei löydy tietokannasta",
        address: person.address ?? "Tietoa ei löydy tietokannasta",
        postalCode: person.postalCode ?? "Tietoa ei löydy tietokannasta",
        city: person.city ?? "Tietoa ei löydy tietokannasta",
        email: person.email ?? "Tietoa ei löydy tietokannasta",
        phone: person.phone ?? "Tietoa ei löydy tietokannasta",
        bankAccount: person.bankAccount ?? "Tietoa ei löydy tietokannasta",
        numberOfShares:
          person.numberOfShares ?? "Tietoa ei löydy tietokannasta",
        ownershipPercentage: person.ownershipPercentage ?? 0,
      },
      owners,
      shareOwnerships: shareOwnerships.length > 0 ? shareOwnerships : [],
      transactions: transactions.length > 0 ? transactions : [],
    };
  } catch (error) {
    console.error("Virhe haettaessa tietoja", error);
    return { owner: null, owners: [], shareOwnerships: [], transactions: [] };
  }
}

const Osakkaidentiedot = () => {
  const { owner, owners, shareOwnerships, transactions } = useLoaderData();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (owners.length > 0) {
      setLoading(false);
    }
  }, [owners]);

  if (loading) {
    return (
      <div>
        <PropagateLoader className={styles.loaderimg} />
        <p style={{ textAlign: "center" }}>
          Ladataan osakkaiden tietoja, odota hetki...
        </p>
      </div>
    );
  }

  if (!owners.length) {
    return (
      <div>
        <p style={{ textAlign: "center" }}>Osakkaiden tietoja ei löytynyt.</p>
      </div>
    );
  }

  return (
    <>
      <h1>Osakkaiden tiedot</h1>
      <OwnerDetails
        owner={owner}
        owners={owners}
        shareOwnerships={shareOwnerships}
        transactions={transactions}
      />
    </>
  );
};

export default Osakkaidentiedot;
