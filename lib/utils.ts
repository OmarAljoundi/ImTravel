import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function GetFirstElement<T>(arr: T[]): T | undefined {
    return arr.length > 0 ? arr[0] : undefined;
}

export function GetLastElement<T>(arr: T[]): T | undefined {
    return arr.length > 0 ? arr[arr.length - 1] : undefined;
}
export function gc(size:number | null) {
  return `col-span-${size ?? 4}`
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
  { label: "كرواتيا", countryCode: "HR" }
]
export type QueryString = {
  country:any[],
  days:any[],
  maxprice:any,
  destination:any[]
}
export const queryString:QueryString = {
  country:[],
  days:[],
  maxprice:null,
  destination:[]

}
export const daysFilter = [
  { label: "من 5 الى 8 ايام", value: "t1",period_min:5,period_max:8 },
   { label: "من 9 الى 12 ايام", value: "t2",period_min:9,period_max:12  },
    { label: "من 13 الى 24 يوم", value: "t3",period_min:13,period_max:24  },
 
]