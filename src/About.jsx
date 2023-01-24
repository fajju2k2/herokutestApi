import React, { useEffect } from 'react';
import HeroSection from './HeroSection';
import { useGlobalContext } from './context';

const About = () => {
  const { updateAboutPage } = useGlobalContext();

  useEffect(() => updateAboutPage(), []);

  // const data = {

  //   name: 'About Teknovation',
  //   image: './images/about1.svg',
  // };
  return <HeroSection />;
};

export default About;
