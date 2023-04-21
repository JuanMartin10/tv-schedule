/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as HIconsOutline from '@heroicons/react/24/outline';
import * as HIconsSolid from '@heroicons/react/20/solid';

import styles from './Icon.module.scss';
import { useEffect, useState } from 'react';

type IconColor = 'white';
type IconVariant = 'outline' | 'solid';

interface IconProps {
  icon: any;
  className?: string;
  color: IconColor;
  variant?: IconVariant;
}

const Icon: React.FC<IconProps> = ({ icon, variant }) => {
  const [icons, setIcons] = useState(
    variant === 'solid' ? HIconsSolid : HIconsOutline
  );

  useEffect(() => {
    setIcons(variant === 'solid' ? HIconsSolid : HIconsOutline);
  }, [variant]);

  // @ts-ignore
  const TheIcon: JSX.Element = icons[icon];

  return (
    <>
      {/* @ts-ignore */}
      <TheIcon className={styles.icon} />
    </>
  );
};

export default Icon;
