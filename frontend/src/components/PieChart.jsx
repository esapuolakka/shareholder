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
      data: [
        ["ensimmäinen", 3000],
        ["toinen", 8000],
        ["kolmas", 14000],
        ["neliäs", 25000],
        ["visas", 50000],
      ],
      size: "100%",
      innerSize: "60%",
    },
  ],
  xAxis: {
    tickInterval: 1,
  },
};

const PieChart = () => {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default PieChart;
