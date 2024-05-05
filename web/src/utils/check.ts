export const isPreparingComponent = (createdAt: string) => {
  if (!createdAt) {
    return true;
  }
  const nowTime = new Date().getTime();
  const createdTime = new Date(createdAt).getTime();
  return nowTime < createdTime;
};

export const isNewComponent = (createdAt: string) => {
  if (!createdAt) {
    return false;
  }
  const nowTime = new Date().getTime();
  const createdTime = new Date(createdAt).getTime();
  const period = 30 * 24 * 60 * 60 * 1000;
  return nowTime - createdTime <= period;
};
