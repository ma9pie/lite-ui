// First letter uppercase conversion function
export const firstToUpper = (str: string) => {
  if (typeof str !== 'string') return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};
