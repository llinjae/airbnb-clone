/** @jsxImportSource @emotion/react */

"use client";

import useCountries from "@/app/hooks/useCountries";
import useSearchModal from "@/app/hooks/useSearchModal";
import { css } from "@emotion/react";
import { differenceInDays } from "date-fns";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  const searchModal = useSearchModal();
  const params = useSearchParams();
  const { getByValue } = useCountries();

  const locationValue = params?.get("locationValue");
  const startDate = params?.get("startDate");
  const endDate = params?.get("endDate");
  const guestCount = params?.get("guestCount");

  const locationLabel = useMemo(() => {
    if (locationValue) {
      return getByValue(locationValue as string)?.label;
    }

    return "어디든지";
  }, [getByValue, locationValue]);

  const durationLabel = useMemo(() => {
    if (startDate && endDate) {
      const start = new Date(startDate as string);
      const end = new Date(endDate as string);
      let diff = differenceInDays(end, start);

      if (diff === 0) {
        diff = 1;
      }

      return `${diff} 일`;
    }

    return "언제든지";
  }, [startDate, endDate]);

  const guestLabel = useMemo(() => {
    if (guestCount) {
      return `${guestCount} 명`;
    }

    return "게스트 추가";
  }, [guestCount]);

  return (
    <div onClick={searchModal.onOpen} css={[SearchBox]}>
      <div css={[SearchContentBox]}>
        <div css={[Anywhere]}>{locationLabel}</div>
        <div css={[AnyWeek]}>{durationLabel}</div>
        <div css={[GuestSearchBox]}>
          <div css={[AddGuest]}>{guestLabel}</div>
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
