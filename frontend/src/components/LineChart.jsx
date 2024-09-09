import Highcharts, { chart } from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    type: "line",
  },
  title: {
    text: "ARVONKEHITYS (valuation history)",
    align: screenLeft,
  },
  series: [
    {
      data: [4200, 347, 4010, 760, 2260, 1120, 4500],
      color: "#ed692f",
      name: "Osakkeen hinta",
      marker: {
        radius: 6,
        lineColor: "#666666",
        fillColor: "rgb(204 204 204 / 50%)",
        lineWidth: 1,
      },
    },
  ],
  xAxis: {
    categories: [2018, 2019, 2020, 2021, 2022, 2023, 2024],
  },
};

const LineChart = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ width: "80%" }}>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
      <div
        style={{
          width: "35%",
          paddingLeft: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          fontWeight: 300,
          fontSize: "12px",
          fontStyle: "italic",
          lineHeight: "24px",
        }}
      >
        <div>
          <strong style={{ fontWeight: 600 }}>5.9.2024</strong>
          <br />
          <span>Päivämäärä</span>
        </div>
        <div>
          <span>EUR</span> <strong style={{ fontWeight: 600 }}>0.135</strong>
          <br />
          <span>Osakkeen hinta</span>
        </div>
      </div>
    </div>
  );
};

export default LineChart;
