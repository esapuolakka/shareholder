import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsAccessibility from "highcharts/modules/accessibility";

// init the module
highchartsAccessibility(Highcharts);

const LineChart = ({ data }) => {
  const { averagePerYear, latestPrice } = data;
  const options = {
    chart: {
      type: "line",
    },
    title: {
      text: "ARVONKEHITYS",
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
        data: Object.values(averagePerYear),
        color: "#ed692f",
        name: "Osakkeen hinta",
        lineWidth: 1,
        marker: {
          radius: 6,
          lineColor: "var(--primary-color)",
          fillColor: "#FEFCE1",
          lineWidth: 1,
        },
      },
    ],
    xAxis: {
      categories: Object.keys(averagePerYear),
    },
    yAxis: {
      title: {
        text: "Osakkeen hinta (EUR)",
      },
      labels: {
        format: "{value} €",
      },
      tickPositions: [0, 50, 100, 150, 200],
      gridLineColor: "#e6e6e6",
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
          <span>Osakkeen hinta: </span>
          <strong style={{ fontWeight: 400 }}> EUR {latestPrice.price}</strong>
        </div>
      </div>
    </div>
  );
};

export default LineChart;
