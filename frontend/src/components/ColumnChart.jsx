import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    type: "column",
  },
  title: {
    text: "OSAKEKANNAN KEHITYS (Share count over time)",
    align: screenLeft,
  },
  series: [
    {
      name: "Osaketta yhteensä",
      data: [4200000, 347000, 4010000, 760000, 2260000, 1120000, 4500000],
      color: "#fefce2",
      borderColor: "#ed692f",
    },
  ],
  xAxis: {
    categories: [2018, 2019, 2020, 2021, 2022, 2023, 2024],
  },
  yAxis: {
    min: 0,
  },
};

const ColumnChart = () => {
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
          <strong style={{ fontWeight: 600 }}>5.9.2024</strong>
          <br />
          <span>Päivämäärä</span>
        </div>
        <div>
          <strong style={{ fontWeight: 600 }}>4070921</strong>
          <br />
          <span>Osaketta yhteensä</span>
        </div>
      </div>
    </div>
  );
};

export default ColumnChart;
