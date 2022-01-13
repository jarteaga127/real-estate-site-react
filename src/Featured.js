import React from "react";
import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const HeroSec = styled.section`
  height: 100vh;
  max-height: 1080px;
  width: 100%;
  max-width: 1920px;
  position: relative;
  overflow: hidden;
`;

const HeroWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const SlideShow = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;

const Slider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;

  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(0deg, black 0%, black 50%, black 100%);
  }
`;

const SlideImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;

const SlideContent = styled.div`
  position: relative;
  z-index: 10;
  margin-left: 50%;
  padding: 80px;
  align-items: center;
  color: white;

  h1 {
    font-size: 48px;
    font-weight: bold;
    margin-bottom: 0.2rem;
  }

  p {
    font-size: 32px;
    margin-bottom: 0.8rem;
  }

  @media screen and (max-width: 688px) {
    margin: auto;
    padding: 50px;
    align-items: center;

    h1 {
      font-size: 32px;
    }

    p {
      font-size: 24px;
    }
  }
`;

const ViewBtn = styled.button`
  height: 40px;
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  color: white;
  background-color: #934687;
  cursor: pointer;
  font-size: 18px;
  z-index: 20;

  &:hover {
    background-color: #74388f;
  }

  @media screen and (max-width: 688px) {
    width: 100%;
    height: 50px;
  }
`;

const SlideControl = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10;
`;

const SlideLeft = styled.button`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  border: none;
  color: white;
  background-color: #934687;
  cursor: pointer;
  font-size: 24px;

  &:hover {
    background-color: #74388f;
  }

  @media screen and (max-width: 688px) {
    width: 40px;
    height: 40px;
    font-size: 18px;
  }
`;

const SlideRight = styled.button`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  border: none;
  color: white;
  background-color: #934687;
  cursor: pointer;
  font-size: 24px;

  &:hover {
    background-color: #74388f;
  }

  @media screen and (max-width: 688px) {
    width: 40px;
    height: 40px;
    font-size: 18px;
  }
`;

export default function Featured({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };

    timeout.current = setTimeout(nextSlide, 8000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    setCurrent(current === length - 1 ? 0 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <HeroSec>
      <HeroWrap>
        {slides.map((slide, index) => {
          return (
            <SlideShow key={index}>
              {index === current && (
                <Slider>
                  <SlideImg src={slide.image} alt={slide.alt} />
                  <SlideContent>
                    <h1>{slide.title}</h1>
                    <p>{slide.price}</p>
                    <ViewBtn>View This Pad</ViewBtn>
                  </SlideContent>
                </Slider>
              )}
            </SlideShow>
          );
        })}
        <SlideControl>
          <SlideLeft onClick={prevSlide}>
            <i class="fas fa-chevron-left"></i>
          </SlideLeft>
          <SlideRight onClick={nextSlide}>
            <i class="fas fa-chevron-right"></i>
          </SlideRight>
        </SlideControl>
      </HeroWrap>
    </HeroSec>
  );
}
