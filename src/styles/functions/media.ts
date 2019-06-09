import { css, SimpleInterpolation } from 'styled-components';

import Breakpoint from '../variables/breakpoint';

type StyledFunction = (props: any) => string;
type MediaFnArgument = SimpleInterpolation | StyledFunction;

type MediaFn = (strings: TemplateStringsArray, ...args: MediaFnArgument[]) => string;

interface Media {
  mobile: MediaFn;
  tablet: MediaFn;
  desktop: MediaFn;
}

// Building an function for each of the breakpoints
export default Object.keys(Breakpoint).reduce(
  (breakpoints: object, name: string): object => {
    // @ts-ignore
    const breakpoint: string = Breakpoint[name];

    return {
      ...breakpoints,
      [name.toLowerCase()]: (
        strings: TemplateStringsArray,
        ...args: SimpleInterpolation[]
      ): any => css`
        @media (min-width: ${breakpoint}) {
          ${css(strings, ...args)};
        }
      `
    };
  },
  {}
) as Media;
