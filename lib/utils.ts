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
  { label: "النمسا", countryCode: "AT" },
  { label: "بلجيكا", countryCode: "BE" },
  { label: "بلغاريا", countryCode: "BG" },
  { label: "كرواتيا", countryCode: "HR" },
  { label: "قبرص", countryCode: "CY" },
  { label: "التشيك", countryCode: "CZ" },
  { label: "الدنمارك", countryCode: "DK" },
  { label: "استونيا", countryCode: "EE" },
  { label: "فنلندا", countryCode: "FI" },
  { label: "فرنسا", countryCode: "FR" },
  { label: "المانيا", countryCode: "DE" },
  { label: "اليونان", countryCode: "GR" },
  { label: "هنغاريا", countryCode: "HU" },
  { label: "ايسلندا", countryCode: "IS" },
  { label: "ايرلندا", countryCode: "IE" },
  { label: "ايطاليا", countryCode: "IT" },
  { label: "لاتفيا", countryCode: "LV" },
  { label: "ليتوانيا", countryCode: "LT" },
  { label: "لوكسمبورج", countryCode: "LU" },
  { label: "مالطا", countryCode: "MT" },
  { label: "هولندا", countryCode: "NL" },
  { label: "النرويج", countryCode: "NO" },
  { label: "بولندا", countryCode: "PL" },
  { label: "البرتغال", countryCode: "PT" },
  { label: "رومانيا", countryCode: "RO" },
  { label: "سلوفاكيا", countryCode: "SK" },
  { label: "سلوفينيا", countryCode: "SI" },
  { label: "اسبانيا", countryCode: "ES" },
  { label: "السويد", countryCode: "SE" },
  { label: "سويسرا", countryCode: "CH" },
  { label: "المملكة المتحدة", countryCode: "GB" },
];
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
  { label: "من 5 الى 7 ايام", value: "t1",period_min:5,period_max:7 },
   { label: "من 8 الى 15 ايام", value: "t2",period_min:8,period_max:15  },
    { label: "من 16 الى 24 يوم", value: "t3",period_min:16,period_max:24  },
 
]