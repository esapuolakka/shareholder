import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import OwnerDetails from "../components/OwnerDetails";
import PropagateLoader from "react-spinners/PropagateLoader";
import styles from "../components/OwnerDetails.module.css";
import api from "../api";

export async function loader() {
  const { data: personsData } = await api.get("/persons");
  const { data: transactionsData } = await api.get("/transactions");
  const { data: shareOwnershipsData } = await api.get("/shareownership/all");

  // unite into owner object
  const owners = personsData.map((person) => {
    const ownership = shareOwnershipsData.find((o) => o.owner.id === person.id);
    const transaction = transactionsData.find(
      (t) => t.buyer.id === person.id || t.seller.id === person.id
    );

    return {
      id: person.id,
      firstname: person.firstname ?? "Tietoa ei löydy tietokannasta",
      lastname: person.lastname ?? "Tietoa ei löydy tietokannasta",
      numberOfShares: ownership ? ownership.numberOfShares : 0,
      ownershipPercentage: person.ownershipPercentage ?? 0, // ownership percentage not in person entity anymore??
      shareNumbers: ownership
        ? {
            beginning: ownership.startingShareNumber,
            ending: ownership.endingShareNumber,
          }
        : "Henkilöllä ei ole osakkeita omistuksessa",
      collectionDate:
        transaction?.collectionDate ?? "Tietoa ei löydy tietokannasta",
      term: transaction?.term ?? "Tietoa ei löydy tietokannasta",
      transferTaxPaid: transaction?.transferTaxPaid ?? false,
      ssn: person.ssn ?? "Tietoa ei löydy tietokannasta",
      city: person.city ?? "Tietoa ei löydy tietokannasta",
      address: person.address ?? "Tietoa ei löydy tietokannasta",
      postalCode: person.postalCode ?? "Tietoa ei löydy tietokannasta",
      email: person.email ?? "Tietoa ei löydy tietokannasta",
      phone: person.phone ?? "Tietoa ei löydy tietokannasta",
      bankAccount: person.bankAccount ?? "Tietoa ei löydy tietokannasta",
    };
  });

  return { owners };
}

const Osakkaidentiedot = () => {
  const { owners } = useLoaderData();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (owners) {
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

  if (!owners || owners.length === 0) {
    return (
      <div>
        <PropagateLoader className={styles.loaderimg} />
        <p style={{ textAlign: "center" }}>
          Osakkaiden tietoja ei löytynyt. Lisää uusia tietoja tietokantaan.
        </p>
      </div>
    );
  }

  return (
    <>
      <h1>Osakkaiden tiedot</h1>
      <OwnerDetails owners={owners} />
    </>
  );
};

export default Osakkaidentiedot;
