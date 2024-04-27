import { useRouter } from 'next/router';
import { useEffect } from 'react';

const useRedirect = (url: string) => {
  const router = useRouter();

  useEffect(() => {
    router.push(url);
  }, []);
};

export default useRedirect;
