import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import dayjs from 'dayjs';

const ApexChart = () => {
  const [state, setState] = useState({
    series: [
      {
        name: 'Price',
        data: [
  {"x": 1538834400000, "y": [6600.0, 6606.13, 6594.41, 6600.6]},
  {"x": 1538836200000, "y": [6600.6, 6602.38, 6596.85, 6601.77]},
  {"x": 1538838000000, "y": [6601.77, 6609.7, 6591.97, 6597.54]},
  {"x": 1538839800000, "y": [6597.54, 6601.88, 6589.46, 6595.55]},
  {"x": 1538841600000, "y": [6595.55, 6599.15, 6589.94, 6591.42]},
  {"x": 1538843400000, "y": [6591.42, 6596.91, 6589.95, 6592.96]},
  {"x": 1538845200000, "y": [6592.96, 6596.79, 6587.14, 6590.27]},
  {"x": 1538847000000, "y": [6590.27, 6599.62, 6586.21, 6596.47]},
  {"x": 1538848800000, "y": [6596.47, 6601.12, 6590.17, 6596.66]},
  {"x": 1538850600000, "y": [6596.66, 6604.9, 6586.63, 6593.17]},
  {"x": 1538852400000, "y": [6593.17, 6600.62, 6584.88, 6586.95]},
  {"x": 1538854200000, "y": [6586.95, 6593.27, 6577.07, 6586.15]},
  {"x": 1538856000000, "y": [6586.15, 6591.89, 6577.02, 6586.43]},
  {"x": 1538857800000, "y": [6586.43, 6591.89, 6578.21, 6586.53]},
  {"x": 1538859600000, "y": [6586.53, 6593.39, 6578.62, 6582.26]},
  {"x": 1538861400000, "y": [6582.26, 6584.48, 6571.72, 6579.47]},
  {"x": 1538863200000, "y": [6579.47, 6585.48, 6576.57, 6583.85]},
  {"x": 1538865000000, "y": [6583.85, 6593.15, 6575.91, 6583.1]},
  {"x": 1538866800000, "y": [6583.1, 6584.95, 6579.8, 6581.76]},
  {"x": 1538868600000, "y": [6581.76, 6589.36, 6581.14, 6586.9]},
  {"x": 1538870400000, "y": [6586.9, 6592.99, 6579.38, 6585.17]},
  {"x": 1538872200000, "y": [6585.17, 6590.4, 6581.77, 6587.52]},
  {"x": 1538874000000, "y": [6587.52, 6590.92, 6577.95, 6586.1]},
  {"x": 1538875800000, "y": [6586.1, 6587.33, 6579.62, 6581.55]},
  {"x": 1538877600000, "y": [6581.55, 6585.73, 6574.52, 6581.36]},
  {"x": 1538879400000, "y": [6581.36, 6588.99, 6578.9, 6586.96]},
  {"x": 1538881200000, "y": [6586.96, 6595.76, 6584.07, 6588.15]},
  {"x": 1538883000000, "y": [6588.15, 6592.33, 6577.55, 6584.96]},
  {"x": 1538884800000, "y": [6584.96, 6592.53, 6579.29, 6589.48]},
  {"x": 1538886600000, "y": [6589.48, 6591.15, 6582.17, 6588.94]},
  {"x": 1538888400000, "y": [6588.94, 6596.74, 6583.46, 6590.4]},
  {"x": 1538890200000, "y": [6590.4, 6599.48, 6587.73, 6591.36]},
  {"x": 1538892000000, "y": [6591.36, 6597.92, 6586.88, 6590.86]},
  {"x": 1538893800000, "y": [6590.86, 6596.89, 6586.79, 6591.94]},
  {"x": 1538895600000, "y": [6591.94, 6597.68, 6585.36, 6594.0]},
  {"x": 1538897400000, "y": [6594.0, 6599.33, 6584.18, 6591.11]},
  {"x": 1538899200000, "y": [6591.11, 6595.66, 6585.78, 6592.36]},
  {"x": 1538901000000, "y": [6592.36, 6597.55, 6585.2, 6590.66]},
  {"x": 1538902800000, "y": [6590.66, 6592.68, 6581.03, 6586.15]},
  {"x": 1538904600000, "y": [6586.15, 6588.11, 6579.73, 6580.77]},
  {"x": 1538906400000, "y": [6580.77, 6584.52, 6576.59, 6583.69]},
  {"x": 1538908200000, "y": [6583.69, 6587.96, 6575.6, 6580.68]},
  {"x": 1538910000000, "y": [6580.68, 6587.79, 6577.14, 6582.99]},
  {"x": 1538911800000, "y": [6582.99, 6584.83, 6577.65, 6581.86]},
  {"x": 1538913600000, "y": [6581.86, 6584.91, 6575.49, 6582.57]},
  {"x": 1538915400000, "y": [6582.57, 6586.41, 6579.86, 6585.71]},
  {"x": 1538917200000, "y": [6585.71, 6590.94, 6579.33, 6586.41]},
  {"x": 1538919000000, "y": [6586.41, 6587.57, 6581.57, 6584.88]},
  {"x": 1538920800000, "y": [6584.88, 6588.64, 6582.62, 6584.5]},
  {"x": 1538922600000, "y": [6584.5, 6591.81, 6581.83, 6587.11]}
]
,
      },
    ],
    options: {
      chart: {
        type: 'candlestick',
        height: 550,
        toolbar: {
          show: true,
          tools: {
            download: true,
            selection: true,
            zoom: true,
            zoomin: true,
            zoomout: true,
            pan: true,
            reset: true,
          },
          autoSelected: 'zoom'
        },
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 800,
          animateGradually: {
            enabled: true,
            delay: 150,
          },
          dynamicAnimation: {
            enabled: true,
            speed: 350,
          },
        },
        zoom: {
          enabled: true,
          type: 'x',
          autoScaleYaxis: true,
        },
      },
      title: {
        text: 'Super Advanced Stock Market Chart',
        align: 'left',
        style: {
          fontSize: '20px',
          fontWeight: 'bold',
          color: '#263238'
        },
      },
      annotations: {
        xaxis: [
          {
            x: new Date(1538780400000).getTime(),
            borderColor: '#00E396',
            label: {
              style: {
                color: '#fff',
                background: '#00E396',
              },
              text: 'Significant Event',
            },
          },
        ],
      },
      tooltip: {
        enabled: true,
        shared: true,
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          const data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];
          const date = dayjs(data.x).format('MMM D, YYYY HH:mm');
          const [o, h, l, c] = data.y;
          const change = (((c - o) / o) * 100).toFixed(2);
          const changeColor = c > o ? 'green' : c < o ? 'red' : 'gray';

          return `
            <div style="padding:10px; font-family:Arial, sans-serif">
              <div style="font-size:14px; margin-bottom:5px;"><strong>${date}</strong></div>
              <div>Open: <strong>${o.toFixed(2)}</strong></div>
              <div>High: <strong>${h.toFixed(2)}</strong></div>
              <div>Low: <strong>${l.toFixed(2)}</strong></div>
              <div>Close: <strong>${c.toFixed(2)}</strong></div>
              <div style="color:${changeColor}; font-weight:bold;">Change: ${change}%</div>
            </div>
          `;
        },
      },
      xaxis: {
        type: 'datetime',
        labels: {
          formatter: function (val) {
            return dayjs(val).format('MMM DD HH:mm');
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
        labels: {
          formatter: function (val) {
            return val.toFixed(2);
          },
        },
      },
      grid: {
        borderColor: '#e7e7e7',
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5,
        },
      },
      plotOptions: {
        candlestick: {
          colors: {
            upward: '#00B746',
            downward: '#EF403C',
          },
          wick: {
            useFillColor: true,
          },
        },
      },
      theme: {
        mode: 'light',
        palette: 'palette1',
      },
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="candlestick"
        height={550}
      />
    </div>
  );
};

export default ApexChart;
