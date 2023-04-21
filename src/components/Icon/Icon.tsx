/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as HIconsOutline from '@heroicons/react/24/outline';
import * as HIconsSolid from '@heroicons/react/20/solid';

import { useEffect, useState } from 'react';
import styles from './Icon.module.css';

type IconColor = 'white' | 'yellow';
type IconVariant = 'outline' | 'solid';

interface IconProps {
  icon: any;
  color?: IconColor;
  variant?: IconVariant;
}

const Icon: React.FC<IconProps> = ({ icon, color = 'white', variant }) => {
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
      <TheIcon className={`${styles.icon} ${styles[`icon_${color}`]}`} />
      {/* <TheIcon className={`${styles.icon} ${styles.icon}_${color}`} /> */}
    </>
  );
};

export default Icon;
