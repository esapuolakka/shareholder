import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import AddNewTransactionForm from "./AddNewTransactionNotificationForm";
import AddNewPersonForm from "./AddNewPersonForm";
import { useMediaQuery } from "@mui/material";
import styles from "./Addnew.module.css";

const AddNew = ({ persons }) => {
  const [value, setValue] = useState(0);

  const isMobileOrTablet = useMediaQuery("(max-width:768px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const CustomTabPanel = (props) => {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <div>{children}</div>
          </Box>
        )}
      </div>
    );
  };
  return (
    <>
      {isMobileOrTablet ? (
        <>
          <Box>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              sx={{
                "& .MuiTab-root": {
                  fontFamily: "var(--font-family)",
                  fontSize: "1.2rem",
                  fontWeight: "500",
                  color: "var(--heading-and-text-color)",
                  "&.Mui-selected": {
                    color: "var(--heading-and-text-color)",
                  },
                  "&:focus": {
                    color: "var(--heading-and-text-color)",
                  },
                },
                "& .MuiTabs-indicator": {
                  backgroundColor: "var(--primary-color)",
                  height: "1px",
                },
              }}
            >
              <Tab label="Osakemyynti ilmoitus" />
              <Tab label="Osakkeenomistaja" />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <AddNewTransactionForm persons={persons} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <AddNewPersonForm />
          </CustomTabPanel>
        </>
      ) : (
        // Desktop
        <>
          <section className={styles.AddNew}>
            <AddNewTransactionForm persons={persons} />
            <AddNewPersonForm />
          </section>
        </>
      )}
    </>
  );
};

export default AddNew;
