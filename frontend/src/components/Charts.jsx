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
  } = data;
  return (
    <div className={styles.Charts}>
      <div className={styles.details}>
        <h2>YRITYS</h2>

        <div className={styles.detailsRow}>
          <BusinessIcon />
          <h3>PHZ Full Stack Oy</h3>
        </div>

        <div className={styles.detailsRow}>
          <AssignmentIndIcon />
          <h3>Y-2765147-9</h3>
        </div>

        <div className={styles.detailsRow}>
          <LocationOnIcon />
          <h3>Helsinki, Finland</h3>
        </div>

        <div className={styles.detailsRow}>
          <LanguageIcon />
          <h3>
            <a href="https://phz.fi/">phz.fi</a>
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
