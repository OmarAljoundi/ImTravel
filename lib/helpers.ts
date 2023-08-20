export function hexToHSLString(
  hexColor: string,
  lightnessIncrease: number = 0
): string {
  const hex = hexColor.replace("#", "");

  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;

  let h = 0;
  let s = 0;
  let l = (max + min) / 2;

  if (delta !== 0) {
    s = l < 0.5 ? delta / (max + min) : delta / (2 - max - min);

    if (max === r) {
      h = (g - b) / delta + (g < b ? 6 : 0);
    } else if (max === g) {
      h = (b - r) / delta + 2;
    } else if (max === b) {
      h = (r - g) / delta + 4;
    }

    h /= 6;
  }

  l = Math.min(1, Math.max(0, l + lightnessIncrease)); // Corrected lightness adjustment

  const hue = Math.round(h * 360);
  const saturation = Math.round(s * 100);
  const lightness = Math.round(l * 100);

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

export const getPrice = (price: number): string => {
  const priceWord = "للشخص الواحد";
  const currecny = "ريال";
  return `${priceWord} ${price} ${currecny}`;
};
