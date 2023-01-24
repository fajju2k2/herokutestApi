import React, { useEffect } from 'react';
import { useGlobalContext } from './context';
import HeroSection from './HeroSection';

const Home = () => {
  const { updateHomePage } = useGlobalContext();
  useEffect(() => updateHomePage(), []);

  // const data = {
  //   name: 'Create Website with Teknovation',
  //   image: './images/hero.svg',
  // };

  return <HeroSection />;
};

export default Home;
