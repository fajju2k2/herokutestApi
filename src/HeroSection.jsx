import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from './Components/Styles/Button';
import { useGlobalContext } from './context';

const HeroSection = () => {
  const { name, image } = useGlobalContext();

  const Wrapper = styled.section`
    padding: 9rem 0;

    .section-hero-data {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .btn {
      max-width: 16rem;
    }

    .hero-top-data {
      text-transform: uppercase;
      font-weight: 500;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.helper};
    }

    .hero-heading {
      text-transform: uppercase;
      font-size: 6.4rem;
    }

    .hero-para {
      margin-top: 1.5rem;
      margin-bottom: 3.4rem;
      max-width: 60rem;
    }

    .section-hero-image {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    picture {
      text-align: center;
    }

    .hero-img {
      max-width: 80%;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .grid {
        gap: 7.2rem;
      }
    }
  `;
  return (
    <Wrapper>
      <div className='container grid grid-two-column'>
        <div className='section-hero-data'>
          <p className='hero-top-data'>
            lorem lore {name} Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Culpa hic, unde sunt qui iusto architecto? Totam,
            necessitatibus, obcaecati incidunt deleniti voluptate impedit odit
            tempora quo fugit cumque fugiat, fuga sapiente.
          </p>

          <h1 className='hero-heading'>{name}</h1>

          <p className='hero-para'>
            lorem lore Lorem ipsum dolor sit amet, Praesentium modi fuga, error
            quam maiores, debitis {name} itaque deleniti ipsam consequatur,
            possimus pariatur accusamus! Sint sed impedit neque voluptates
            obcaecati corrupti necessitatibus.
          </p>

          <Button className='btn hireme-btn'>
            <NavLink to='/Contact'>Join us</NavLink>
          </Button>
        </div>
        <div className='section-hero-image'>
          <picture>
            <img src={image} alt='img' className='hero-img' />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroSection;
