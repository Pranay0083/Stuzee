import React from 'react';
import { Helmet } from 'react-helmet-async';

const Discussions: React.FC = () => (
  <div>
    <Helmet>
      <title>Discussions | StoneAge</title>
    </Helmet>
    <h1 className="text-2xl font-bold">Discussions</h1>
    <p>Here are your available Discussions.</p>
  </div>
);

export default Discussions;
