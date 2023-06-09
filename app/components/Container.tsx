/** @jsxImportSource @emotion/react */

'use client';

import { css } from '@emotion/react';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div css={[ContainerBox]}>{children}</div>;
};

export default Container;

const breakpoints = [640, 768, 1280];

const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const ContainerBox = css`
  max-width: 2520px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;

  ${mq[0]} {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  ${mq[1]} {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }

  ${mq[2]} {
    padding-left: 5rem;
    padding-right: 5rem;
  }
`;
