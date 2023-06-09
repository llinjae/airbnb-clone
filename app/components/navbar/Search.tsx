/** @jsxImportSource @emotion/react */

'use client';

import { css } from '@emotion/react';
import { BiSearch } from 'react-icons/bi';

const Search = () => {
  return (
    <div css={[SearchBox]}>
      <div css={[SearchContentBox]}>
        <div css={[Anywhere]}>어디든지</div>
        <div css={[AnyWeek]}>언제든지</div>
        <div css={[GuestSearchBox]}>
          <div css={[AddGuest]}>게스트 추가</div>
          <div css={[SearchIcon]}>
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

const SearchBox = css`
  border-width: 1px;
  width: 100%;
  padding: 0.5rem 0;
  border-radius: 9999px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  }

  @media (min-width: 768px) {
    width: auto;
  }
`;

const SearchContentBox = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Anywhere = css`
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0 1.5rem;
`;

const AnyWeek = css`
  display: none;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0 1.5rem;
  border-left-width: 1px;
  border-right-width: 1px;
  flex: 1 1 0%;
  text-align: center;

  @media (min-width: 640px) {
    display: block;
  }
`;

const GuestSearchBox = css`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.875rem;
  padding-left: 1.5rem;
  padding-right: 0.5rem;
  color: rgb(75 85 99 / 1);
`;

const AddGuest = css`
  display: none;

  @media (min-width: 640px) {
    display: block;
  }
`;

const SearchIcon = css`
  padding: 0.5rem;
  border-radius: 9999px;
  background-color: rgb(244 63 94 / 1);
  color: white;
`;