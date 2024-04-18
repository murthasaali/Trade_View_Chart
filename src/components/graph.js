import React, { useEffect, useState } from 'react';
import { createChart, LineStyle, LineType } from 'lightweight-charts';

const ChartWithButtons = () => {
  const [preValue, setPreValue] = useState(48499);
  const [currentValue, setCurrentValue] = useState(48500);
  const [chart, setChart] = useState(null);

  useEffect(() => {
    const chartOptions = {
      layout: {
        textColor: 'white',
        background: { type: 'solid', color: 'transparent' },
        LineStyle:"none",
        LineType:"none",
      
      },
      timeScale: {
        timeVisible: true,
        secondsVisible: true
      },
      priceScale: {
        position: 'right'
      } ,  grid: {
        vertLines: {
          color: 'rgba(0, 0, 0, 0)', // Make vertical grid lines transparent
        },
        horzLines: {
          color: 'rgba(0, 0, 0, 0)', // Make horizontal grid lines transparent
        },
      },
    };

    const newChart = createChart(document.getElementById('chartContainer'), chartOptions);
    setChart(newChart);

    // Dummy data
    const now = Date.now();
    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push({ time: now - i * 60000, value: Math.random() * 1000 + 48000 });
    }

    // Sort data by time in ascending order
    data.sort((a, b) => a.time - b.time);

    const mainSeries = newChart.addLineSeries();
    mainSeries.setData(data);

    return () => {
      newChart.remove(); // Cleanup when component unmounts
    }
  }, []);


  return (
    <div className='md:p-4 p-0 w-full'>
      <button id="upButton" className="p-3 text-white">Up</button>
      <button id="downButton" className='p-3 text-white' >Down</button>
      <div id="chartContainer"  className='relative md:h-[400px] h-[200px] md:w-[60%] w-full'></div>
      <div id="profitLoss"></div>
    </div>
  );
};

export default ChartWithButtons;
