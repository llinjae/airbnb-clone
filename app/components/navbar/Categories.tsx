'use client';

import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from 'react-icons/gi';
import { BsSnow } from 'react-icons/bs';
import { FaSkiing } from 'react-icons/fa';
import { MdOutlineVilla } from 'react-icons/md';
import { IoDiamond } from 'react-icons/io5';
import { usePathname, useSearchParams } from 'next/navigation';

import Container from '../Container';
import CategoryBox from '../CategoryBox';

export const categories = [
  {
    label: '해변가',
    icon: TbBeach,
    description: '해변가와 가까이 있음!',
  },
  {
    label: '풍차',
    icon: GiWindmill,
    description: '풍차가 있음!',
  },
  {
    label: '현대',
    icon: MdOutlineVilla,
    description: '현대식 건물임!',
  },
  {
    label: '시골',
    icon: TbMountain,
    description: '시골에 있음!',
  },
  {
    label: '수영장',
    icon: TbPool,
    description: ' 수영장이 있음!',
  },
  {
    label: '섬',
    icon: GiIsland,
    description: ' 섬에 있음!',
  },
  {
    label: '계곡',
    icon: GiBoatFishing,
    description: '계곡과 가까움!',
  },
  {
    label: '스키장',
    icon: FaSkiing,
    description: '스키장이 있음!',
  },
  {
    label: '성',
    icon: GiCastle,
    description: '성에 있음!',
  },
  {
    label: '캠핑',
    icon: GiForestCamp,
    description: '캠핑이 가능!',
  },
  {
    label: '북극',
    icon: BsSnow,
    description: '북극에 있음!',
  },
  {
    label: '동굴',
    icon: GiCaveEntrance,
    description: '동굴이 있음!',
  },
  {
    label: '사막',
    icon: GiCactus,
    description: '사막이 있음!',
  },
  {
    label: '헛간',
    icon: GiBarn,
    description: '헛간이 있음!',
  },
  {
    label: '럭셔리',
    icon: IoDiamond,
    description: '럭셔리한 공간임!',
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();

  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className='pt-4 flex flex-row items-center justify-between overflow-x-auto'>
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
