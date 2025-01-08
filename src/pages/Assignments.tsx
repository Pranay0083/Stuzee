import React from 'react';
import { Helmet } from 'react-helmet-async';

const Assignments: React.FC = () => (
  <div>
    <Helmet>
      <title>Assignments | StoneAge</title>
    </Helmet>
    <h1 className="text-2xl font-bold">Assignments</h1>
    <p>Here are your available Assignments.</p>
  </div>
);

export default Assignments;
