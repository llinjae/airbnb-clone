/** @jsxImportSource @emotion/react */

'use client';

import Image from 'next/image';

import { css } from '@emotion/react';
import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      alt='Logo'
      css={[LogoImage]}
      height='100'
      width='100'
      src='/images/logo.png'
    />
  );
};

export default Logo;

const LogoImage = css`
  display: none;
  cursor: pointer;

  @media (min-width: 768px) {
    display: block;
  }
`;
