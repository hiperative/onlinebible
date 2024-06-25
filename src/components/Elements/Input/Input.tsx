import styled from 'styled-components'

import media from '../../../styles/functions/media'

export const Input = styled.input`
  display: block;
  flex: 1;
  width: 100%;
  height: 45px;
  padding: 0 15px;
  color: #000;
  background-color: #fff;
  border-radius: 4px;
  /* border: 1px solid #50e3c2; */
  border: none;
  font-size: 1rem;

  ${media.tablet`
    display: inline-block;
    width: 320px;
    border-radius: 4px 0 0 4px;
  `};
`

export default Input
