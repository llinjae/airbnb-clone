/** @jsxImportSource @emotion/react */

'use client';

import Image from 'next/image';

import { css } from '@emotion/react';

const Avatar = () => {
  return (
    <Image
      css={[AvatarIcon]}
      height='30'
      width='30'
      alt='Avatar'
      src='/images/placeholder.jpg'
    />
  );
};

export default Avatar;

const AvatarIcon = css`
  border-radius: 9999px;
`;
