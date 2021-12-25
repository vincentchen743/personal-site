import React from 'react';
import PropTypes from 'prop-types';

import Job from './Experience/Job';

const Extracurricular = ({ data }) => (
  <div className="Extracurricular">
    <div className="link-to" id="extracurricular" />
    <div className="title">
      <h3>Extracurricular</h3>
    </div>
    {data.map((job) => (
      <Job
        data={job}
        key={job.company}
      />
    ))}
  </div>
);

Extracurricular.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  })),
};

Extracurricular.defaultProps = {
  data: [],
};

export default Extracurricular;
