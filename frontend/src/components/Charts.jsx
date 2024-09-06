import LineChart from "./LineChart";
import styles from "./Charts.module.css";
import ColumnChart from "./ColumnChart";
import PieChart from "./PieChart";

const Charts = () => {
  return (
    <div className={styles.Charts}>
      <div className={styles.details}>
        <p>
          <h2>YRITYS</h2>
        </p>
        <h3>PHZ Full Stack Oy</h3>
        <h3>Y-2765147-9</h3>
        <h3>Helsinki, Finland</h3>
        <h3>https://phz.fi/</h3>
      </div>
      <div className={styles.lineChart}>
        <LineChart />
      </div>

      <div className={styles.barChart}>
        <ColumnChart />
      </div>
      <div className={styles.pieChart}>
        <PieChart />
      </div>
    </div>
  );
};

export default Charts;
