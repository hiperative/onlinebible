import styled from 'styled-components';

import media from '../../styles/functions/media';

export const Container = styled.div`
  position: relative;
  width: 320px;
  margin: auto;
  padding: 20px;

  ${media.tablet`
    padding: 0;
    width: 940px;
  `};
`;

export const Logo = styled.img`
  display: block;
  width: 50px;
  height: 50px;
  /* padding: 5px; */
  /* border: 3px solid #50e3c2; */
  /* border-radius: 50%; */

  ${media.tablet`;
    margin-top: 30px;
  `};
`;

export const Pill = styled.p`
  display: inline-block;
  background: #fff;
  border-radius: 3px;
  min-width: 135px;
  margin-top: 30px;
  padding: 2px 10px;
  line-height: 22px;
  height: 25px;

  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 13px;
  color: #000;
`;

export const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 48px;
  line-height: 3.25rem;
  letter-spacing: -1px;

  width: 300px;

  ${media.tablet`
    width: 450px;
  `};
`;

export const Text = styled.p`
  font-weight: 400;

  width: 260px;

  ${media.tablet`
    width: 380px;
  `};
`;
