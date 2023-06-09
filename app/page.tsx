/** @jsxImportSource @emotion/react */

'use client';

import { css } from '@emotion/react';

export default function Home() {
  return <div css={[HomeContainer]}>Hello Airbnb!</div>;
}

const HomeContainer = css`
  color: rgb(244 63 94);
  font-size: 1.5rem;
  line-height: 2rem;
`;
