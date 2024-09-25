import React, { useState, useEffect } from "react";
import AddNewTransactionForm from "./AddNewTransactionNotificationForm";
import AddNewPersonForm from "./AddNewPersonForm";
import styles from "./Addnew.module.css";

const AddNew = ({ persons }) => {
  return (
    <>
      <section className={styles.AddNew}>
        <AddNewTransactionForm persons={persons} />
        <AddNewPersonForm />
      </section>
    </>
  );
};

export default AddNew;
