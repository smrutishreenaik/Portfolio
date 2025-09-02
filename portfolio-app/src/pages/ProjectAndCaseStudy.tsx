import React from 'react'
import Footer from '../components/Footer';
import Projects from '../components/Projects';
import CaseStudy from '../components/CaseStudy';

const ProjectAndCaseStudy: React.FC = () => {
  return (
    <>
    Project and case study
    <Projects/>
    <CaseStudy/>
    <Footer/>
    </>
  );
};

export default ProjectAndCaseStudy;