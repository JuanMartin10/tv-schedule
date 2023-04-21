import { useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { useAppContext } from '../../context/app-context';

const Loader = () => {
  const [color] = useState('#FFA540');
  const { loading } = useAppContext();

  return (
    <ClipLoader
      color={color}
      loading={loading}
      size={20}
      aria-label='Loading Spinner'
      data-testid='loader'
    />
  );
};

export default Loader;
