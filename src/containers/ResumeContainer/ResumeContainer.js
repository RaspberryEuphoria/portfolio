import React from 'react';

const resumeUrl = require('../../public/resume_thomas_mion.jpg')


const ResumeContainer = () => {
  return <div>
    <p>Download my resume <a href={resumeUrl} download>here</a>.</p>
    <p>
      <a href={resumeUrl} download className="img-link"><img src={resumeUrl} /></a>
    </p>
  </div>;
};

export default ResumeContainer;
