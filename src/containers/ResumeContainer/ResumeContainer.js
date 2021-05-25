import React from 'react';

const resumeUrl = '...'; // @todo add new resume

const ResumeContainer = () => {
  return <div>
    <p>Download my resume <a href={resumeUrl} download>here</a>.</p>
    <p>
      <a href={resumeUrl} download className="img-link"><img src={resumeUrl} /></a>
    </p>
  </div>;
};

export default ResumeContainer;
