import Highcharts, { chart } from "highcharts";
import HighchartsReact from "highcharts-react-official";

const LineChart = ({ data }) => {
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
        data: Object.values(data),
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
      categories: Object.keys(data),
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
          <strong style={{ fontWeight: 400 }}>5.9.2024</strong>
        </div>
        <div>
          <span>Osakkeen hinta: </span>
          <strong style={{ fontWeight: 400 }}> EUR 0.135</strong>
        </div>
      </div>
    </div>
  );
};

export default LineChart;
