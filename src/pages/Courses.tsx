import React from 'react';
import { Helmet } from 'react-helmet-async';

const Courses: React.FC = () => (
  <div>
    <Helmet>
      <title>Courses | StoneAge</title>
    </Helmet>
    <h1 className="text-2xl font-bold">Courses</h1>
    <p>Here are your available courses.</p>
  </div>
);

export default Courses;
