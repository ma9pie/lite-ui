export const isNewComponent = (createdAt: string) => {
  const now = new Date();
  const createdDate = new Date(createdAt);
  const period = 30 * 24 * 60 * 60 * 1000;
  return now.getTime() - createdDate.getTime() <= period;
};
