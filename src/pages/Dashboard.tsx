import React from 'react';
import { Helmet } from 'react-helmet-async';

const Dashboard: React.FC = () => (
  <div>
    <Helmet>
      <title>Dashboard | Frontend App</title>
    </Helmet>
    <h1 className="text-2xl font-bold">Dashboard</h1>
    <p>Welcome to the LMS Dashboard!</p>
  </div>
);

export default Dashboard;
