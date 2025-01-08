import React from 'react';
import { Helmet } from 'react-helmet-async';

const Notfound: React.FC = () => (
  <div>
    <Helmet>
      <title>Notfound | StoneAge</title>
    </Helmet>
    <h1 className="text-2xl font-bold">Notfound</h1>
    <p>OOpssss.</p>
  </div>
);

export default Notfound;
