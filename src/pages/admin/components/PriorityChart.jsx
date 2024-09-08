import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

function PriorityChart({ data }) {
  const chartData = [
    { name: 'Low', value: data[0], color: '#50AFAE' },
    { name: 'Medium', value: data[1], color: '#A822D0' },
    { name: 'High', value: data[2], color: '#4E94F7' },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center w-full h-full">
      <h3 className="text-2xl font-bold text-center mb-4">Priority Chart</h3>
      <div className="flex justify-center items-center w-full h-auto">
        <div className="relative w-full max-w-xs h-auto flex items-center justify-center">
          <PieChart width={350} height={300}>
            <Pie
              data={chartData}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={90}
              paddingAngle={2}
              labelLine={false}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
         
          </PieChart>
        </div>
      </div>
      <div className="flex justify-center items-center space-x-3 mt-4">
        {chartData.map((item, index) => (
          <div key={index} className="flex items-center">
            <div
              style={{ backgroundColor: item.color }}
              className="w-4 h-4 rounded-full mr-2"
            ></div>
            <span className="text-sm">{`${item.name}: ${item.value}`}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PriorityChart;
