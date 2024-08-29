import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import OwnerDetails from "../components/OwnerDetails";

export async function loader() {
  const owners = [
    {
      id: 1,
      firstname: "Saima",
      lastname: "Saippua",
      email: "ss@gmail.com",
      phone: "+123456789",
      numberOfShares: 25,
      ownershipPercentage: "50%",
      shareNumbers: [
        { beginning: 1, ending: 4 },
        { beginning: 203, ending: 300 },
        { beginning: 870, ending: 2000 },
      ],
      collectionDate: "2023-01-01",
      term: "2023-01-05",
      transferTaxPaid: true,
      personalIdentityCode: "Y-2225069-2",
      city: "Helsinki",
      address: "Jeejee 1, Helsinki",
      accountNumber: "FI123456789",
    },
  ];
  return { owners };
}

const Osakkaidentiedot = () => {
  const { owners } = useLoaderData();
  const [selectedOwner, setSelectedOwner] = useState(null);

  const handleSelectChange = (event) => {
    const ownerId = parseInt(event.target.value);
    const owner = owners.find((o) => o.id === ownerId);
    setSelectedOwner(owner);
  };

  return (
    <>
      <h1>Osakkaiden tiedot</h1>
      <select onChange={handleSelectChange}>
        <option value="">Valitse omistaja</option>
        {owners.map((owner) => (
          <option key={owner.id} value={owner.id}>
            {owner.firstname} {owner.lastname}
          </option>
        ))}
      </select>

      {selectedOwner && <OwnerDetails owner={selectedOwner} />}
    </>
  );
};

export default Osakkaidentiedot;
