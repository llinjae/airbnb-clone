/** @jsxImportSource @emotion/react */

'use client';

import { css } from '@emotion/react';

interface MenuItemProps {
  onClick: () => void;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
  return (
    <div onClick={onClick} css={[MenuBox]}>
      {label}
    </div>
  );
};

export default MenuItem;

const MenuBox = css`
  padding: 0.75rem 1rem;
  font-weight: 600;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:hover {
    background-color: rgb(245, 245, 245);
  }
`;
