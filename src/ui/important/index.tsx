'use client';

import { usePathname } from 'next/navigation';
import BirdBackground from '../motion';

const BirdBackgroundWrapper = () => {
  const pathname = usePathname();

  const hideOnPaths = [
    '/uz/contact',
    '/en/contact',
    '/ru/contact',
    '/uz/portfolio',
    '/en/portfolio',
    '/ru/portfolio'
  ];

  const shouldHide = hideOnPaths.includes(pathname);

  if (shouldHide) return null;

  return <BirdBackground />;
};

export default BirdBackgroundWrapper;
