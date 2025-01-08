import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard';
import Courses from '../pages/Courses';
import Notfound from '../pages/Notfound';
import Discussions from '../pages/Discussions';
import Feedback from '../pages/Feedback';
import Assignments from '../pages/Assignments';
import HelpAndSupport from '../pages/HelpAndSupport';
import Profile from '../pages/Profile';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="courses" element={<Courses />} />
      <Route path="discussions" element={<Discussions />} />
      <Route path="feedback" element={<Feedback />} />
      <Route path="assignments" element={<Assignments />} />
      <Route path="help" element={<HelpAndSupport />} />
      <Route path="profile" element={<Profile />} />
      <Route path="*" element={<Notfound />} />
    </Route>
  </Routes>
);

export default AppRoutes;
