import styled from 'styled-components';

import media from '../../../styles/functions/media';

export const Button = styled.button`
  display: block;
  border: none;
  border-radius: 4px;
  width: 100%;
  height: 45px;
  margin-top: 20px;
  background: #50e3c2;
  /* background: #5c22ff; */
  color: #000;
  font-size: 14px;
  font-family: 'Montserrat';
  text-align: center;

  ${media.tablet`
    display: inline-block;
    width: 175px;
    margin-left: -10px;
  `};
`;
