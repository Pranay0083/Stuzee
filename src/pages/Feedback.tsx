import React from 'react';
import { Helmet } from 'react-helmet-async';

const Feedback: React.FC = () => (
  <div>
    <Helmet>
      <title>Feedback | StoneAge</title>
    </Helmet>
    <h1 className="text-2xl font-bold">Feedback</h1>
    <p>Here are your available Feedback.</p>
  </div>
);

export default Feedback;
