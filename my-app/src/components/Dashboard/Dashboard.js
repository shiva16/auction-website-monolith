import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Dashboard = props => {
  return (
    <div>
      <Helmet>
        <title>Dashboard | Auction</title>
      </Helmet>
      <h1>Welcome to your dashboard, user</h1>
      <Link to='/dashboard/edit'>Edit Profile</Link>
      <Link to='/dashboard/listings'>View your listings</Link>
      <Link to='/dashboard/bids'>View your bid history</Link>
      <Link to='/dashboard/reviews'>View your reviews</Link>
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;