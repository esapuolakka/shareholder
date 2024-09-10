import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import OwnerDetails from "../components/OwnerDetails";
import PropagateLoader from "react-spinners/PropagateLoader";
import styles from "../components/OwnerDetails.module.css";

export async function loader() {
  const personsResponse = await axios.get("http://localhost:8080/api/persons");
  const shareholdersResponse = await axios.get(
    "http://localhost:8080/api/shareholders"
  );

  const personsData = personsResponse.data;
  const shareholdersData = shareholdersResponse.data;

  // unite person ja shareholder into owner object
  const owners = personsData.map((person) => {
    const shareholder = shareholdersData.find(
      (s) => s.buyer.id === person.id || s.seller.id === person.id
    );
    return {
      id: person.id,
      firstname: person.firstname,
      lastname: person.lastname,
      numberOfShares: shareholder ? shareholder.numberOfShares : 0,
      ownershipPercentage: person.ownershipPercentage || 0,
      shareNumbers: [
        { beginning: 1, ending: 800 },
        { beginning: 801, ending: 3000 },
        { beginning: 3001, ending: 100000 },
      ],
      collectionDate: shareholder?.collectionDate ?? "N/A",
      term: shareholder?.term ?? "N/A",
      transferTaxPaid: shareholder?.transferTaxPaid ?? false,
      ssn: person.ssn ?? "N/A", //no method in backend for this
      city: person.city ?? "N/A", //no method in backend for this
      address: person.address ?? "N/A", //no method in backend for this
      postalCode: person.postalCode ?? "N/A", //no method in backend for this
      email: person.email ?? "N/A",
      phone: person.phone ?? "N/A",
      accountNumber: person.accountNumber ?? "N/A", //no method in backend for this
    };
  });

  return { owners };
}

const Osakkaidentiedot = () => {
  const { owners } = useLoaderData();

  if (!owners || owners.length === 0) {
    return (
      <div>
        <PropagateLoader className={styles.loaderimg} />
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
