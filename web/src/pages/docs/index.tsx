import { useRouter } from 'next/router';
import { useEffect } from 'react';

const DocsPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/docs/guide/installation');
  }, []);

  return null;
};

export default DocsPage;
