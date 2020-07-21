import styled, { keyframes } from 'styled-components';

export const glitch1 = keyframes`
  0% {
    clip: rect(20px, 920px, 51px, 0);
  }

  5% {
    clip: rect(83px, 920px, 102px, 0);
  }

  10% {
    clip: rect(83px, 920px, 105px, 0);
  }

  15% {
    clip: rect(95px, 920px, 11px, 0);
  }

  20% {
    clip: rect(105px, 920px, 56px, 0);
  }

  25% {
    clip: rect(40px, 920px, 19px, 0);
  }

  30% {
    clip: rect(56px, 920px, 97px, 0);
  }

  35% {
    clip: rect(9px, 920px, 17px, 0);
  }

  40% {
    clip: rect(103px, 920px, 53px, 0);
  }

  45% {
    clip: rect(92px, 920px, 6px, 0);
  }

  50% {
    clip: rect(69px, 920px, 46px, 0);
  }

  55% {
    clip: rect(8px, 920px, 87px, 0);
  }

  60% {
    clip: rect(12px, 920px, 15px, 0);
  }

  70% {
    clip: rect(28px, 920px, 106px, 0);
  }

  80% {
    clip: rect(98px, 920px, 63px, 0);
  }

  85% {
    clip: rect(11px, 920px, 44px, 0);
  }

  95% {
    clip: rect(23px, 920px, 84px, 0);
  }

  100% {
    clip: rect(66px, 920px, 91px, 0);
  }
`;

export const glitch2 = keyframes`
  0% {
    clip: rect(86px, 920px, 25px, 0);
  }

  5% {
    clip: rect(30px, 920px, 17px, 0);
  }

  10% {
    clip: rect(54px, 920px, 43px, 0);
  }

  15% {
    clip: rect(10px, 920px, 86px, 0);
  }

  25% {
    clip: rect(62px, 920px, 1px, 0);
  }

  30% {
    clip: rect(61px, 920px, 24px, 0);
  }

  35% {
    clip: rect(38px, 920px, 46px, 0);
  }

  40% {
    clip: rect(115px, 920px, 8px, 0);
  }

  45% {
    clip: rect(87px, 920px, 44px, 0);
  }

  50% {
    clip: rect(6px, 920px, 65px, 0);
  }

  55% {
    clip: rect(83px, 920px, 99px, 0);
  }

  65% {
    clip: rect(25px, 920px, 71px, 0);
  }

  70% {
    clip: rect(37px, 920px, 55px, 0);
  }

  75% {
    clip: rect(115px, 920px, 18px, 0);
  }

  80% {
    clip: rect(68px, 920px, 46px, 0);
  }

  90% {
    clip: rect(47px, 920px, 31px, 0);
  }

  95% {
    clip: rect(47px, 920px, 84px, 0);
  }

  100% {
    clip: rect(93px, 920px, 53px, 0);
  }
`;

export const Container = styled.div`
  font-size: 38px;
  color: #141414;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin: 10px 0 5px 0;
`;

export const GlitchEffect = styled.div`
  color: #f0f0f0;
  position: relative;
  &::before, &::after {
    background: transparent;
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    clip: rect(0, 0, 0, 0);
  }
  &::before {
    left: -2px;
    text-shadow: 2px 0 #f26b38;
    animation: ${glitch2} 2s infinite linear alternate-reverse;
  }

  &::after {
    left: 2px;
    text-shadow: -1px 0 #f26b38;
    animation: ${glitch1} 2s infinite linear alternate-reverse;
  }
  
`;
