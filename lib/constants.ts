export const COUNTRIES = [
  { label: "المانيا", countryCode: "DE" },
  { label: "النمسا", countryCode: "AT" },
  { label: "سويسرا", countryCode: "CH" },
  { label: "ايطاليا", countryCode: "IT" },
  { label: "فرنسا", countryCode: "FR" },
  { label: "التشيك", countryCode: "CZ" },
  { label: "بريطانيا", countryCode: "GB" },
  { label: "هولندا", countryCode: "NL" },
  { label: "تركيا", countryCode: "TR" },
  { label: "النرويج", countryCode: "NO" },
  { label: "اسبانيا", countryCode: "ES" },
  { label: "البوسنة والهرسك", countryCode: "BA" },
  { label: "المجر", countryCode: "HU" },
  { label: "تونس", countryCode: "TN" },
  { label: "بلجيكيا", countryCode: "BE" },
  { label: "الدنمارك", countryCode: "DK" },
  { label: "البرتغال", countryCode: "PT" },
  { label: "السويد", countryCode: "SE" },
  { label: "فيلندا", countryCode: "FI" },
  { label: "استونيا", countryCode: "EE" },
  { label: "اليونان", countryCode: "GR" },
  { label: "سكوتلندا", countryCode: "GB" },
  { label: "ايرلندا", countryCode: "IE" },
  { label: "اندونيسيا", countryCode: "ID" },
  { label: "ماليزيا", countryCode: "MY" },
  { label: "سيرلنكا", countryCode: "LK" },
  { label: "المالديف", countryCode: "MV" },
  { label: "مالطا", countryCode: "MT" },
  { label: "كرواتيا", countryCode: "HR" },
  { label: "تايلند", countryCode: "TH" },
  { label: "اذربيجان", countryCode: "AZ" },
  { label: "جورجيا", countryCode: "GE" },
  { label: "اليابان", countryCode: "JP" },
  { label: "كوريا الجنوبية", countryCode: "KR" },
  { label: "الصين", countryCode: "CN" },
  { label: "روسيا", countryCode: "RU" },
  { label: "الهند", countryCode: "IN" },
  { label: "البرازيل", countryCode: "BR" },
  { label: "كندا", countryCode: "CA" },
  { label: "الولايات المتحدة", countryCode: "US" },
  { label: "كوبا", countryCode: "CU" },
  { label: "مصر", countryCode: "EG" },
  { label: "المغرب", countryCode: "MA" },
  { label: "الجزائر", countryCode: "DZ" },
  { label: "لبنان", countryCode: "LB" },
  { label: "العراق", countryCode: "IQ" },
  { label: "المملكة العربية السعودية", countryCode: "SA" },
  { label: "الإمارات العربية المتحدة", countryCode: "AE" },
  { label: "قطر", countryCode: "QA" },
  { label: "الكويت", countryCode: "KW" },
  { label: "عمان", countryCode: "OM" },
  { label: "البحرين", countryCode: "BH" },
  { label: "قبرص", countryCode: "CY" },
  { label: "سوريا", countryCode: "SY" },
  { label: "ليبيا", countryCode: "LY" },
  { label: "موريتانيا", countryCode: "MR" },
  { label: "السودان", countryCode: "SD" },
  { label: "الصومال", countryCode: "SO" },
  { label: "إثيوبيا", countryCode: "ET" },
  { label: "كينيا", countryCode: "KE" },
  { label: "جنوب إفريقيا", countryCode: "ZA" },
  { label: "نيجيريا", countryCode: "NG" },
  { label: "غانا", countryCode: "GH" },
  { label: "كوت ديفوار", countryCode: "CI" },
  { label: "الكاميرون", countryCode: "CM" },
  { label: "الجابون", countryCode: "GA" },
  { label: "الكونغو", countryCode: "CG" },
  { label: "لاتفيا", countryCode: "LV" },
  { label: "ليتوانيا", countryCode: "LT" },
  { label: "بلغاريا", countryCode: "BG" },
  { label: "رومانيا", countryCode: "RO" },
  { label: "بولندا", countryCode: "PL" },
  { label: "صربيا", countryCode: "RS" },
  { label: "مقدونيا", countryCode: "MK" },
  { label: "ألبانيا", countryCode: "AL" },
  { label: "سلوفينيا", countryCode: "SI" },
];

export const COUNTRIESASOPTIONS = COUNTRIES.map(({ label }) => {
  return {
    label,
    value: label,
  };
});

export const DAYS = [
  "السبت",
  "الأحد",
  "الإثنين",
  "الثلاثاء",
  "الأربعاء",
  "الخميس",
  "الجمعة",
  "كل يوم",
];

export const DAYSASOPTIONS = DAYS.map((label) => {
  return {
    label,
    value: label,
  };
});

export const IMAGE_SIZES = [
  {
    size: "1/3",
    class: "cols-span-3",
  },
  {
    size: "1/2",
    class: "cols-span-6",
  },
  {
    size: "1/4",
    class: "cols-span-4",
  },
  {
    size: "1",
    class: "cols-span-12",
  },
];

export const IMAGE_ORDERS = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
];
export const CUSTOMER_STATUS: {
  condition: string;
  color: "success" | "warning" | "danger";
}[] = [
  {
    condition: "Responded",
    color: "success",
  },
  {
    condition: "Pending",
    color: "warning",
  },
  {
    condition: "No response",
    color: "danger",
  },
];

export const europeanCountries = [
  { label: "النمسا", countryCode: "AT" },
  { label: "ايطاليا", countryCode: "IT" },
  { label: "سويسرا", countryCode: "CH" },
  { label: "المانيا", countryCode: "DE" },
  { label: "فرنسا", countryCode: "FR" },
  { label: "اسبانيا", countryCode: "ES" },
  { label: "التشيك", countryCode: "CZ" },
  { label: "النرويج", countryCode: "NO" },
  { label: "تركيا", countryCode: "TR" },
  { label: "هولندا", countryCode: "NL" },
  { label: "المجر", countryCode: "HU" },
  { label: "ماليزيا", countryCode: "MY" },
  { label: "اندونيسيا", countryCode: "ID" },
  { label: "تايلند", countryCode: "TH" },
  { label: "السويد", countryCode: "SE" },
  { label: "فنلندا", countryCode: "FI" },
  { label: "الدنمارك", countryCode: "DK" },
  { label: "امريكا", countryCode: "US" },
  { label: "المكسيك", countryCode: "MX" },
  { label: "اليونان", countryCode: "GR" },
  { label: "المغرب", countryCode: "MA" },
  { label: "سيرلنكا", countryCode: "LK" },
  { label: "المالديف", countryCode: "MV" },
  { label: "روسيا", countryCode: "RU" },
  { label: "بولندا", countryCode: "PL" },
  { label: "استونيا", countryCode: "EE" },
  { label: "لاتفيا", countryCode: "LV" },
  { label: "البوسنة", countryCode: "BA" },
  { label: "اذربيجان", countryCode: "AZ" },
  { label: "جورجيا", countryCode: "GE" },
  { label: "سلوفينيا", countryCode: "SI" },
  { label: "كرواتيا", countryCode: "HR" },
  { label: "بلغاريا", countryCode: "BG" },
  { label: "رومانيا", countryCode: "RO" },
  { label: "صربيا", countryCode: "RS" },
  { label: "الجبل الاسود", countryCode: "ME" },
  { label: "بلجيكا", countryCode: "BE" },
  { label: "البانيا", countryCode: "AL" },
  { label: "مولدافا", countryCode: "MD" },
  { label: "اليابان", countryCode: "JP" },
  { label: "كوريا الجنوبية", countryCode: "KR" },
  { label: "الصين", countryCode: "CN" },
  { label: "تونس", countryCode: "TN" },
  { label: "مصر", countryCode: "EG" },
  { label: "الاردن", countryCode: "JO" },
  { label: "الامارات", countryCode: "AE" },
  { label: "السعودية", countryCode: "SA" },
  { label: "كازخستان ", countryCode: "KZ" },
  { label: "كوسوفو", countryCode: "XK" },
];
