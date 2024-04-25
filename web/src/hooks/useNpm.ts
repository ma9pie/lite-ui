import { useQuery } from '@tanstack/react-query';

import { LITE_UI_NPM_REGISTRY_API_URL } from '@/constants';
import { axios } from '@/utils';

const useNpm = () => {
  const getLiteuiVersion = async () => {
    const res: any = await axios.get(LITE_UI_NPM_REGISTRY_API_URL);
    const { latest } = res['dist-tags'];
    return `v${latest}`;
  };

  const { data: liteuiVersion } = useQuery({
    staleTime: 60 * 60 * 1000,
    queryKey: ['liteuiVersion'],
    queryFn: getLiteuiVersion,
  });

  return { liteuiVersion };
};

export default useNpm;
