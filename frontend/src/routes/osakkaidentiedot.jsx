import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import OwnerDetails from "../components/OwnerDetails";
import styles from "../components/OwnerDetails.module.css";

export async function loader() {
  const personsResponse = await axios.get("http://localhost:8080/api/persons");
  const shareholdersResponse = await axios.get(
    "http://localhost:8080/api/shareholders"
  );

  const personsData = personsResponse.data;
  const shareholdersData = shareholdersResponse.data;

  // Yhdistetään henkilöt ja osakastiedot
  const owners = personsData.map((person) => {
    const shareholder = shareholdersData.find(
      (s) => s.buyer.id === person.id || s.seller.id === person.id
    );
    return {
      id: person.id,
      firstname: person.firstname,
      lastname: person.lastname,
      email: person.email,
      phone: person.phone,
      numberOfShares: shareholder ? shareholder.numberOfShares : 0,
      ownershipPercentage: person.ownershipPercentage || 0,
      shareNumbers: [
        { beginning: 1, ending: 800 },
        { beginning: 801, ending: 3000 },
        { beginning: 3001, ending: 100000 },
      ],
      collectionDate: shareholder ? shareholder.collectionDate : "N/A",
      term: shareholder ? shareholder.term : "N/A",
      transferTaxPaid: shareholder ? shareholder.transferTaxPaid : false,
      personalIdentityCode: person.ssn || "N/A",
      city: person.city || "N/A",
      address: `${person.address}, ${person.postalCode}` || "N/A",
      accountNumber: person.accountNumber || "N/A",
    };
  });

  return { owners };
}

const Osakkaidentiedot = () => {
  const { owners } = useLoaderData();

  return (
    <>
      <h1>Osakkaiden tiedot</h1>
      <OwnerDetails owners={owners} />
    </>
  );
};

export default Osakkaidentiedot;
