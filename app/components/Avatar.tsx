/** @jsxImportSource @emotion/react */

'use client';

import { css } from '@emotion/react';

import Image from 'next/image';

interface AvatarProps {
  src: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      css={[AvatarIcon]}
      height='30'
      width='30'
      alt='Avatar'
      src={src || '/images/placeholder.jpg'}
    />
  );
};

export default Avatar;

const AvatarIcon = css`
  border-radius: 9999px;
`;
