import styled from 'styled-components';

import media from '../../styles/functions/media';

export const Wrapper = styled.main`
  display: block;
  margin: auto;
  min-width: 320px;
  max-width: 100%;

  ${media.tablet`
    width: 940px;
  `};
`;
