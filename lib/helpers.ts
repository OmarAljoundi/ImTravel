import { QueryLocationSchema } from "@/schema";

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

  l = Math.min(1, Math.max(0, l + lightnessIncrease));

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

type FilterOperator =
  | "eq"
  | "neq"
  | "gt"
  | "gte"
  | "lt"
  | "lte"
  | "like"
  | "ilike"
  | "is"
  | "not.is"
  | "in"
  | "cs"
  | "cd"
  | "sl"
  | "sr"
  | "nxl"
  | "nxr"
  | "adj"
  | "ov"
  | "fts"
  | "plfts"
  | "phfts"
  | "wfts";

export function getEqOperator(op: any): FilterOperator {
  return "eq";
}

export function createClientLink(domain: string, endpoint: string) {
  return `${process.env.NEXT_PUBLIC_HTTP_ROOT_DOMAIN_CLIENT?.replace(
    "REPLACE_ME",
    domain
  )}${endpoint}`;
}

export function getToursIds(
  locations: QueryLocationSchema[] | QueryLocationSchema
): number[] {
  let ids: number[] = [];
  if (Array.isArray(locations)) {
    locations.map((x) => {
      if (x.attributes && x.attributes.length > 0) {
        ids = ids.concat(
          x.attributes[0].locationTours?.map((x) => x.tourId) ?? []
        );
      }
    });
  } else {
    if (locations) {
      if (locations.attributes && locations.attributes.length > 0) {
        ids = ids.concat(
          locations.attributes[0].locationTours?.map((x) => x.tourId) ?? []
        );
      }
    }
  }

  return ids;
}

export function getTotalToursSeprate(location: QueryLocationSchema) {
  let total = 0;

  location.attributes?.map((x) => {
    total += x._count.locationTours;
  });
  return getWordTotalSeprate(total);
}

function getWordTotalSeprate(total: number) {
  switch (total) {
    case 0:
      return { count: 0, word: "رحلة" };
    case 1:
      return { word: "رحلة واحدة" };
    case 2:
      return { word: "رحلاتين" };
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
      return { word: "رحلات", count: total };
    default:
      return { word: "رحلة", count: total };
  }
}
