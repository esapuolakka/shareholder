import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const PieChart = ({ data }) => {
  const options = {
    chart: {
      type: "pie",
    },
    title: {
      text: "PÄÄOMARAKENNE",
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
    colors: ["#F7E897", "#FFB44F", "#F9C89B", "#FAFC8F", "#ED692F", "#CCCCCC"],
    series: [
      {
        type: "pie",
        dataLabels: {
          enabled: false,
        },
        data,
        size: "80%",
        innerSize: "70%",
      },
    ],
    xAxis: {
      tickInterval: 1,
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
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 200,
          fontSize: "14px",
          fontStyle: "italic",
          flexWrap: "wrap",
          lineHeight: "2rem",
          marginBlockEnd: "1.5rem",
        }}
      >
        <div>
          <span>Yhteensä sijoitettu: </span>
          <strong style={{ fontWeight: 400 }}>EUR 340,925,86</strong>
        </div>
        <div style={{ textAlign: "center" }}>
          <span>Laimentamaton omistustaulukko: </span> <br />
          <strong style={{ fontWeight: 400 }}>48 osakkeenomistajaa</strong>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
