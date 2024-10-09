import LineChart from "./LineChart";
import styles from "./Charts.module.css";
import ColumnChart from "./ColumnChart";
import PieChart from "./PieChart";

import BusinessIcon from "@mui/icons-material/Business";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LanguageIcon from "@mui/icons-material/Language";

const Charts = ({ data }) => {
  const {
    top5Data,
    totalShareOwners,
    averagePerYear,
    latestPrice,
    totalSharesPerYear,
    companyData,
  } = data;
  return (
    <div className={styles.Charts}>
      <div className={styles.details}>
        <h2>YRITYS</h2>

        <div className={styles.detailsRow}>
          <BusinessIcon />
          <h3>{companyData.name}</h3>
        </div>

        <div className={styles.detailsRow}>
          <AssignmentIndIcon />
          <h3>{companyData.companyId}</h3>
        </div>

        <div className={styles.detailsRow}>
          <LocationOnIcon />
          <h3>{companyData.city}</h3>
        </div>

        <div className={styles.detailsRow}>
          <LanguageIcon />
          <h3>
            <a href={`https://${companyData.url}/`} target="_blank">
              {companyData.url}
            </a>
          </h3>
        </div>
      </div>
      <div className={styles.lineChart}>
        <LineChart data={{ averagePerYear, latestPrice }} />
      </div>

      <div className={styles.barChart}>
        <ColumnChart data={{ totalSharesPerYear, latestPrice }} />
      </div>
      <div className={styles.pieChart}>
        <PieChart data={{ top5Data, totalShareOwners }} />
      </div>
    </div>
  );
};

export default Charts;
