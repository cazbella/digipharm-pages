// src/components/Dashboard.js

import React from 'react';

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      
      {/* Number of Recommended Interventions */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Number of Recommended Interventions</h2>
        <p className="text-4xl font-semibold">35</p>
      </div>

      {/* Facilities Needing Urgent Attention */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Facilities Needing Urgent Attention</h2>
        <p className="text-4xl font-semibold">8</p>
      </div>

      {/* Top Predictive Risk Factors */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Top Predictive Risk Factors</h2>
        <ul className="list-disc list-inside">
          <li>High Blood Pressure</li>
          <li>Smoking</li>
          <li>Obesity</li>
        </ul>
      </div>

      {/* Potential Cost Savings */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Potential Cost Savings</h2>
        <p className="text-4xl font-semibold">$150,000</p>
      </div>

      {/* Patient Groups at Highest Risk */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Patient Groups at Highest Risk</h2>
        <ul className="list-disc list-inside">
          <li>Patients with Diabetes</li>
          <li>Patients over 65</li>
          <li>Patients with COPD</li>
        </ul>
      </div>

    </div>
  );
};

export default Dashboard;
