/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

function HomePage(props) {
  const { testId } = props;
  return (
    <Link to="/weatherDetails">
      <button data-test-id={testId}>GET WEATHER DETAILS</button>
    </Link>
  );
}

HomePage.propTypes = {
  testId: propTypes.func.isRequired,
};

export default HomePage;
