import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

function PriorityChart
({ data, loggedInAdmin }) {
  const chartColors = {
    onProgress: { id: 'onProgress', start: '#FF931F', end: '#FFEBA4' },
    completed: { id: 'completed', start: '#90CA47', end: '#BEED99' },
  };

  const adminData = data.find((admin) => admin.admin === loggedInAdmin);

  if (!adminData) {
    return <p>No data available for the logged-in admin.</p>;
  }

  const pieData = [
    { name: 'On Progress', value: adminData.onProgress, color: chartColors.onProgress.id },
    { name: 'Completed', value: adminData.completed, color: chartColors.completed.id },
  ];

  return (
    <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-lg">
      <div className="flex justify-center items-center">
        <PieChart width={120} height={120}>
          <defs>
            <linearGradient id={chartColors.onProgress.id} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={chartColors.onProgress.start} />
              <stop offset="100%" stopColor={chartColors.onProgress.end} />
            </linearGradient>
            <linearGradient id={chartColors.completed.id} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={chartColors.completed.start} />
              <stop offset="100%" stopColor={chartColors.completed.end} />
            </linearGradient>
          </defs>
          <Pie
            data={pieData}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={30}
            outerRadius={50}
            paddingAngle={3}
            stroke="#fff"
            strokeWidth={2}
          >
            {pieData.map((entry, idx) => (
              <Cell key={`cell-${idx}`} fill={`url(#${entry.color})`} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
      <div className="flex flex-col justify-center items-start space-y-3">
        <h3 className="text-lg font-semibold">{adminData.admin} Task</h3>
        {pieData.map((item, idx) => (
          <div key={idx} className="flex items-center">
            <svg width="20" height="20" className="mr-2">
              <circle cx="10" cy="10" r="10" fill={`url(#${item.color})`} />
            </svg>
            <span className="text-sm font-medium">{`${item.name}: ${item.value}`}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PriorityChart
;
