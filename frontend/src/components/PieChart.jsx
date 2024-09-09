import Highcharts, { chart } from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    type: "pie",
  },
  title: {
    text: "PÄÄOMARAKENNE (cap table)",
    align: screenLeft,
  },
  colors: ["#F7E897", "#FFB44F", "#F9C89B", "#FAFC8F", "#ED692F"],
  series: [
    {
      type: "pie",
      dataLabels: {
        enabled: false,
      },
      data: [
        ["ensimmäinen", 3000],
        ["toinen", 8000],
        ["kolmas", 14000],
        ["neliäs", 25000],
        ["visas", 50000],
      ],
      size: "80%",
      innerSize: "70%",
    },
  ],
  xAxis: {
    tickInterval: 1,
  },
};

const PieChart = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ width: "70%" }}>
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
          <span>EUR</span>{" "}
          <strong style={{ fontWeight: 600 }}>340,925,86</strong>
          <br />
          <span>Yhteensä sijoitettu</span>
        </div>
        <div>
          <strong style={{ fontWeight: 600 }}>48 </strong>{" "}
          <span>Laimentamaton omistustaulukko</span> <br />
        </div>
      </div>
    </div>
  );
};

export default PieChart;
