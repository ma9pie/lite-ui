/**
 * #000000 -> { r: 0, g: 0, b: 0 }
 * @param hex color code
 * @returns { r, g, b }
 */
export const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
  hex = hex.replace(/^#/, '');
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
};

/**
 * Calculate luminance (luminance per unit area)
 * The closer it is to 1, the brighter it is.
 */
export const calcLuminance = (r: number, g: number, b: number): number => {
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
};

/**
 * rgb(0, 0, 0) => [0, 0, 0]
 * @param rgbStr
 * @returns [number, number, number]
 */
export const parseRGBString = (rgbStr: string): [number, number, number] => {
  const regex = /rgb\((\d+),\s*(\d+),\s*(\d+)\)/;
  const matches = rgbStr.match(regex);
  if (matches) {
    return [parseInt(matches[1]), parseInt(matches[2]), parseInt(matches[3])];
  } else {
    return [0, 0, 0];
  }
};
