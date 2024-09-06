import Highcharts, { chart } from "highcharts";
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
  yAxix: {
    min: 0,
  },
};

const ColumnChart = () => {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default ColumnChart;
