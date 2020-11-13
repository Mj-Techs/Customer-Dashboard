import React from "react";
import Chart from "react-google-charts";
const OrdersChart = (props) => {
  //   const { data } = props;

  //   Chart.charts.load("current", { packages: ["corechart"] });
  //   Chart.charts.setOnLoadCallback(drawChart);

  //   const chartData = [["No of Orders", "Customer Count"]];
  //   for (const key in data) {
  //     chartData.push([key, data[key]]);
  //   }

  //   function drawChart() {
  //     const data = Chart.visualization.arrayToDataTable(chartData);
  //     const options = {
  //       title: "Customer Distribution ",
  //       width: 450,
  //       height: 300,
  //       fontSize: 25,
  //       // backgroundColor: "limegreen",
  //       bar: { groupWidth: "50%" },
  //       legend: { position: "none" },
  //     };
  //     const chart = new Chart.visualization.ColumnChart(
  //       document.getElementById("columnchart_values")
  //     );
  //     chart.draw(data, options);
  //   }

  return (
    <div className="col-md-6">
      <div
        id="columnchart_values"
        style={{
          width: "400px",
          height: " 300px",
        }}
      ></div>
    </div>
  );
};
export default OrdersChart;
