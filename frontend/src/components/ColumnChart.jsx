import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    type: "column",
  },
  title: {
    text: "OSAKEKANNAN KEHITYS",
    align: "center",
    style: {
      fontWeight: "300",
      fontSize: "14px",
    },
  },
  credits: {
    enabled: false,
  },
  series: [
    {
      name: "Osakkeita yhteensä",
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
          <span>Osakkeita yhteensä: </span>
          <strong style={{ fontWeight: 400 }}>4070921</strong>
        </div>
      </div>
    </div>
  );
};

export default ColumnChart;
