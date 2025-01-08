import React from 'react';
import { Helmet } from 'react-helmet-async';

const Analytics: React.FC = () => (
  <div>
    <Helmet>
      <title>Analytics | Frontend App</title>
    </Helmet>
    <h1 className="text-2xl font-bold">Analytics</h1>
    <p>Welcome to the LMS Analytics!</p>
  </div>
);

export default Analytics;
