import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import dayjs from 'dayjs';
import eod_data from './API_call';

const ApexChart = () => {
  const [state, setState] = useState({
    series: [{ name: 'Price', data: [] }],
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
          autoSelected: 'zoom',
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
        text: ' Stock Market Chart',
        align: 'left',
        style: {
          fontSize: '20px',
          fontWeight: 'bold',
          color: '#263238'
        },
      },
      tooltip: {
        enabled: true,
        shared: true,
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          const data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];
          const date = dayjs(data.x).format('MMM D, YYYY');
          const [o, h, l, c] = data.y;
          const change = (((c - o) / o) * 100).toFixed(2);
          const changeColor = c > o ? 'green' : c < o ? 'red' : 'gray';
              // Access extra properties
    const exchange = data.exchange;
    const symbol = data.symbol;
    const volume = data.volume;


          return `
            <div style="padding:10px; font-family:Arial, sans-serif">
              <div style="font-size:14px; margin-bottom:5px;"><strong>${date}</strong></div>
              <div>Open: <strong>${o.toFixed(2)}</strong></div>
              <div>High: <strong>${h.toFixed(2)}</strong></div>
              <div>Low: <strong>${l.toFixed(2)}</strong></div>
              <div>Close: <strong>${c.toFixed(2)}</strong></div>
              <div style="color:${changeColor}; font-weight:bold;">Change: ${change}%</div>
        <div>Exchange: <strong>${exchange}</strong></div>
        <div>Symbol: <strong>${symbol}</strong></div>
        <div>Volume: <strong>${volume}</strong></div>
            </div>
          `;
        },
      },
      xaxis: {
        type: 'datetime',
        labels: {
          formatter: function (val) {
            return dayjs(val).format('MMM DD');
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

useEffect(async ()=>{
const response=await eod_data();
console.log("the type of response is",typeof(response))
console.log("response data is",response);
const transformed = response.map((item) => ({
  x: new Date(item.date).getTime(),
  y: [item.open, item.high, item.low, item.close],
  exchange: item.exchange,
  symbol: item.symbol, 
  volume: item.volume,
}));
// setState((prev) => ({
//   ...prev,
//   series: [{ name: 'Price', data:transformed }],
// }));
setState({...state,series:[{name:"price",data:transformed}]})
},[])
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
