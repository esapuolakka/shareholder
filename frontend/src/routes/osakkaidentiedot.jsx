import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import OwnerDetails from "../components/OwnerDetails";
import PropagateLoader from "react-spinners/PropagateLoader";
import styles from "../components/OwnerDetails.module.css";
import api from "../api";

export async function loader() {
  const { data: personsData } = await api.get("/persons");
  const { data: shareholdersData } = await api.get("/transactions");

  // unite person ja transaction into owner object
  const owners = personsData.map((person) => {
    const shareholder = shareholdersData.find(
      (s) => s.buyer.id === person.id || s.seller.id === person.id
    );
    return {
      id: person.id,
      firstname: person.firstname ?? "Ei tiedossa",
      lastname: person.lastname ?? "Ei tiedossa",
      numberOfShares: shareholder ? shareholder.numberOfShares : 0,
      ownershipPercentage: person.ownershipPercentage || 0,
      shareNumbers:
        [
          { beginning: 1, ending: 1 },
          { beginning: 2, ending: 2 },
          { beginning: 3, ending: 3 },
        ] ?? "Henkilöllä ei ole osakkeita omistuksessa",
      collectionDate: shareholder?.collectionDate ?? "Ei tiedossa",
      term: shareholder?.term ?? "Ei tiedossa",
      transferTaxPaid: shareholder?.transferTaxPaid ?? false,
      ssn: person.ssn ?? "Ei tiedossa",
      city: person.city ?? "Ei tiedossa",
      address: person.address ?? "Ei tiedossa",
      postalCode: person.postalCode ?? "Ei tiedosssa",
      email: person.email ?? "Ei tiedossa",
      phone: person.phone ?? "Ei tiedossa",
      bankAccount: person.bankAccount ?? "Ei tiedossa",
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
