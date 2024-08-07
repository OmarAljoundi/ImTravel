import { Tour } from "@/types/custom";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function GetFirstElement<T>(arr: T[]): T | undefined {
  return arr.length > 0 ? arr[0] : undefined;
}

export function GetLastElement<T>(arr: T[]): T | undefined {
  return arr.length > 0 ? arr[arr.length - 1] : undefined;
}
export function gc(size: number | null) {
  return `col-span-${size ?? 4}`;
}

export const europeanCountries = [
  { label: "سويسرا", countryCode: "CH" },
  { label: "ايطاليا", countryCode: "IT" },
  { label: "النمسا", countryCode: "AT" },
  { label: "فرنسا", countryCode: "FR" },
  { label: "اسبانيا", countryCode: "ES" },
  { label: "التشيك", countryCode: "CZ" },
  { label: "المانيا", countryCode: "DE" },
  { label: "هولندا", countryCode: "NL" },
  { label: "النرويج", countryCode: "NO" },
  { label: "المغرب", countryCode: "MA" },
  { label: "روسيا", countryCode: "RU" },
  { label: "المجر", countryCode: "HU" },
  { label: "اليونان", countryCode: "GR" },
  { label: "بولندا", countryCode: "PL" },
  { label: "البرتغال", countryCode: "PT" },
  { label: "الدنمارك", countryCode: "DK" },
  { label: "السويد", countryCode: "SE" },
  { label: "فنلندا", countryCode: "FI" },
  { label: "تركيا", countryCode: "TR" },
  { label: "البرتغال", countryCode: "PT" },
  { label: "استونيا", countryCode: "EE" },
  { label: "لاتفيا", countryCode: "LV" },
  { label: "ليتوانيا", countryCode: "LT" },
  { label: "بلغاريا", countryCode: "BG" },
  { label: "رومانيا", countryCode: "RO" },
  { label: "سلوفينيا", countryCode: "SI" },
  { label: "كرواتيا", countryCode: "HR" },
];
export type QueryString = {
  country: any[];
  days: any[];
  maxprice: any;
  destination: any[];
};
export const queryString: QueryString = {
  country: [],
  days: [],
  maxprice: null,
  destination: [],
};

export const daysFilter = [
  { label: "من 5 إلى 8 أيام", value: "t1", period: [5, 6, 7, 8] },
  { label: "من 9 إلى 12 أيام", value: "t2", period: [9, 10, 11, 12] },
  {
    label: "من 13 إلى 24 يوم",
    value: "t3",
    period: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
  },
];
type TourSearch = {
  currency: string;
  country?: string[] | null;
  days?: string[];
  maxprice?: number | null;
};
export function filterTours(prop: TourSearch, tours: Tour[]) {
  const { country, days, maxprice, currency } = prop;

  let filteredTours = [...tours];
  if (country) {
    const countriesToCheck = country;
    filteredTours = filteredTours.filter((tour) => {
      return countriesToCheck.some((country) =>
        tour.tour_countries?.includes(country.trim())
      );
    });
  }

  if (days && days.length > 0) {
    const period = daysFilter.filter((x) => days.join(",").includes(x.label));
    var totalDays: any[] = [];
    period.forEach((item) => {
      totalDays = totalDays.concat(item.period);
    });
    filteredTours = filteredTours.filter((tour) =>
      totalDays.includes(tour.number_of_days)
    );
  }

  if (maxprice) {
    if (currency == "OMR") {
      filteredTours = filteredTours.filter(
        (tour) => tour.price_double! < maxprice
      );
    } else {
      filteredTours = filteredTours.filter(
        (tour) => tour.price_double_sa! < maxprice
      );
    }
  }

  if (currency == "OMR") {
    filteredTours.sort((a, b) => a.price_double! - b.price_double!);
  } else {
    filteredTours.sort((a, b) => a.price_double_sa! - b.price_double_sa!);
  }

  return filteredTours;
}
