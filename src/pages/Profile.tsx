import React from 'react';
import { Helmet } from 'react-helmet-async';

const Profile: React.FC = () => (
  <div>
    <Helmet>
      <title>Profile | StoneAge</title>
    </Helmet>
    <h1 className="text-2xl font-bold">Profile</h1>
    <p>Here are your available Profile.</p>
  </div>
);

export default Profile;
