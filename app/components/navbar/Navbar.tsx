/** @jsxImportSource @emotion/react */

'use client';

import { SafeUser } from '@/app/types';
import { css } from '@emotion/react';

import Container from '../Container';
import Logo from './Logo';
import Search from './Search';
import UserMenu from './UserMenu';
import Categories from './Categories';

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({currentUser}) => {
  return (
    <div css={[NavbarContainer]}>
      <div css={[NavbarContentContainer]}>
        <Container>
          <div css={[NavbarContent]}>
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
};

export default Navbar;

const NavbarContainer = css`
  position: fixed;
  width: 100%;
  background-color: white;
  z-index: 10;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
`;

const NavbarContentContainer = css`
  padding: 1rem 0;
  border-bottom-width: 1px;
`;

const NavbarContent = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;

  @media (min-width: 768px) {
    gap: 0;
  }
`;
