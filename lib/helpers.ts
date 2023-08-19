export function hexToHsl(hex: string): string {
  // Remove the "#" symbol if it exists
  hex = hex.replace("#", "");

  // Convert the HEX color to RGB values
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  // Find the minimum and maximum values of RGB
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  // Calculate the hue (H) value
  let h = 0;
  if (max !== min) {
    if (max === r) {
      h = (60 * ((g - b) / (max - min)) + 360) % 360;
    } else if (max === g) {
      h = (60 * ((b - r) / (max - min)) + 120) % 360;
    } else {
      h = (60 * ((r - g) / (max - min)) + 240) % 360;
    }
  }

  // Calculate the lightness (L) value
  const l = (max + min) / 2;

  // Calculate the saturation (S) value
  let s = 0;
  if (max !== min) {
    s = l > 0.5 ? (max - min) / (2 - max - min) : (max - min) / (max + min);
  }

  // Round the HSL values to one decimal place
  const hRounded = Math.round(h * 10) / 10;
  const sRounded = Math.round(s * 1000) / 10;
  const lRounded = Math.round(l * 1000) / 10;

  return `${hRounded} ${sRounded}% ${lRounded}%`;
}

export const getPrice = (price: number): string => {
  const priceWord = "للشخص الواحد";
  const currecny = "ريال";
  return `${priceWord} ${price} ${currecny}`;
};
