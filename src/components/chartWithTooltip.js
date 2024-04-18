import React, { useEffect, useState } from 'react';
import { createChart } from 'lightweight-charts';

const ChartWithTooltip = () => {
  const [currentValue, setCurrentValue] = useState(4390);
  const [preValue, setPreValue] = useState(4360);
  const [profit, setProfit] = useState(0);

  useEffect(() => {
    const chartOptions = {
      layout: {
        textColor: 'white',
        background: { type: 'solid', color: 'transparent' },
      },
      grid: {
        vertLines: {
          visible: false,
        },
        horzLines: {
          visible: false,
        },
      },
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
      },
    };

    const chart = createChart(document.getElementById('container'), chartOptions);
    const lineSeries = chart.addLineSeries({
      lineWidth: 2,
      priceLineVisible: false,
    });

    const updateChart = () => {
      const newValue = Math.floor(Math.random() * (4420 - 4380 + 1)) + 4350;
      setCurrentValue(newValue);
      const newProfit = newValue - preValue;
      setProfit(newProfit);
      const currentTimestamp = parseInt(Date.now() / 1000);
      lineSeries.update({ time: currentTimestamp, value: newValue, color: newProfit > 0 ? 'green' : 'red' });
    };

    const intervalId = setInterval(updateChart, 1000);

    return () => {
      clearInterval(intervalId);
      chart.remove();
    };
  }, []);

  useEffect(() => {
    if (profit !== 0) {
      const profitType = profit > 0 ? 'Profit' : 'Loss';
      console.log(`${profitType}:`, Math.abs(profit));
    }
  }, [profit]);

  const handleUp = () => {
    // setPreValue(preValue + 10); // Increase preValue by 10
    setCurrentValue(currentValue+10)
  };
  
  const handleDown = () => {
    // setPreValue(preValue - 10); // Decrease preValue by 10
    setCurrentValue(currentValue-10)
  };

  return (
    <div className='w-full h-full relative'>
      <div className='w-10 h-10 absolute flex gap-3 left-24 bottom-20 z-50'>
        <button className='bg-stone-800 bg-opacity-40 text-xl px-2 py-1 scale-110 transition-all duration-300 backdrop-blur-sm text-green-500 rounded-xl' onClick={handleUp}>UP</button>
        <button className='bg-stone-800 bg-opacity-40 text-xl px-2 py-1 scale-110 transition-all duration-300 backdrop-blur-sm text-red-500 rounded-xl' onClick={handleDown}>DOWN</button>
      </div>
      <div className='w-auto rounded-xl h-auto top-0 absolute right-20 flex gap-3 flex-col'>
        <div className={`font-bold p-3 rounded-full bg-stone-800 bg-opacity-40 w-fit text-xl ${profit > 0 ? 'text-green-600' : 'text-red-600'}`}>{profit}.00%</div>
        <div className={`font-bold p-3 rounded-lg bg-stone-800 bg-opacity-40 text-xl backdrop-blur-sm z-40 text-white relative`}><span className='top-[-10px] text-xs absolute left-0 text-stone-100 text-opacity-75'>Stock</span>$ {preValue}.00</div>
      </div>
      <div id="container" style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default ChartWithTooltip;
