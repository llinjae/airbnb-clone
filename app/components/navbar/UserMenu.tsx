/** @jsxImportSource @emotion/react */

'use client';

import { css } from '@emotion/react';
import { AiOutlineMenu } from 'react-icons/ai';
import { useCallback, useState } from 'react';
import { User } from '@prisma/client';
import { signOut } from 'next-auth/react';

import Avatar from '../Avatar';
import MenuItem from './MenuItem';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';

interface UserMenuProps {
  currentUser: User | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div css={[UserContainer]}>
      <div css={[UserBox]}>
        <div onClick={() => {}} css={[Text]}>
          당신의 공간을 에어비앤비하세요
        </div>
        <div onClick={toggleOpen} css={[IconBox]}>
          <AiOutlineMenu />
          <div css={[AvatarIcon]}>
            <Avatar />
          </div>
        </div>
      </div>

      {isOpen && (
        <div css={[MenuItemBox]}>
          <div css={[Item]}>
            {currentUser ? (
              <>
                <MenuItem onClick={() => {}} label='여행' />
                <MenuItem onClick={() => {}} label='위시리스트' />
                <MenuItem onClick={() => {}} label='예약 목록' />
                <MenuItem
                  onClick={() => {}}
                  label='당신의 공간을 에어비앤비하세요'
                />
                <MenuItem onClick={() => {}} label='계정' />
                <hr />
                <MenuItem onClick={() => signOut()} label='로그아웃' />
              </>
            ) : (
              <>
                <MenuItem onClick={registerModal.onOpen} label='회원가입' />
                <MenuItem onClick={loginModal.onOpen} label='로그인' />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;

const UserContainer = css`
  position: relative;
`;

const UserBox = css`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const Text = css`
  display: none;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.75rem 1rem;
  border-radius: 9999px;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  cursor: pointer;

  &:hover {
    background-color: rgb(245, 245, 245);
  }

  @media (min-width: 768px) {
    display: block;
  }
`;

const IconBox = css`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  border-width: 1px;
  border-color: rgb(229 229 229);
  border-radius: 9999px;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  }

  @media (min-width: 768px) {
    padding: 0.25rem 0.5rem;
  }
`;

const AvatarIcon = css`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const MenuItemBox = css`
  position: absolute;
  top: 3.5rem;
  right: 0;
  width: 40vw;
  font-size: 0.875rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  background-color: white;
  overflow: hidden;

  @media (min-width: 768px) {
    width: 75%;
  }
`;

const Item = css`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;
