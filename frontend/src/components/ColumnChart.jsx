import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsAccessibility from "highcharts/modules/accessibility";

// init the module
highchartsAccessibility(Highcharts);

const ColumnChart = ({ data }) => {
  const { totalSharesPerYear, latestPrice } = data;
  const totalShares = Object.values(totalSharesPerYear).reduce(
    (acc, num, index) => {
      return [...acc, (acc[index - 1] ?? 0) + num];
    },
    []
  );

  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "OSAKEKANNAN KEHITYS",
      align: "center",
      style: {
        fontWeight: "700",
        fontSize: "14px",
        fontFamily: "var(--font-family)",
      },
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "Osakkeita yhteensä",
        data: totalShares,
        color: "#fefce2",
        borderColor: "#ed692f",
      },
    ],
    xAxis: {
      categories: Object.keys(data),
    },
    yAxis: {
      min: 0,
    },
  };

  return (
    <div>
      <div style={{ width: "100%", paddingBlockStart: "1.5rem" }}>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          fontWeight: 200,
          fontSize: "14px",
          fontStyle: "italic",
          gap: "2rem",
          marginBlockEnd: "1.5rem",
        }}
      >
        <div>
          <span>Päivämäärä: </span>
          <strong style={{ fontWeight: 400 }}>{latestPrice.date}</strong>
        </div>
        <div>
          <span>Osakkeita yhteensä: </span>
          <strong style={{ fontWeight: 400 }}>
            {totalShares[totalShares.length - 1]}
          </strong>
        </div>
      </div>
    </div>
  );
};

export default ColumnChart;
