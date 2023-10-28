export type Tour = {
  additional_Info: string;
  additional_service: TourFeature[];
  airpot_coming: string;
  airpot_going: string;
  code: string;
  created_at: string;
  external_file: ExternalFile;
  id: number;
  images: string[];
  is_active: boolean;
  is_ticket_included: boolean;
  name: string;
  number_of_days: number;
  price_double: number;
  price_single: number;
  price_double_sa: number;
  price_single_sa: number;
  seo: Seo;
  start_day: string[];
  tour_countries: string[];
  tour_excludes: TourFeature[];
  tour_includes: TourFeature[];
  tour_sections: TourSection[];
  tour_prices: TourPrice[];
  tour_hotels: string[];
  type_id: number;
  tour_type: TourType;
  slug: string;
};

export type Office = {
  address: string;
  best_tours: number[];
  bg_primary_color: string;
  bg_secondary_color: string;
  contact_number: string;
  created_at: string;
  email: string;
  id: number;
  logo: string;
  name: string;
  primary_color: string;
  primary_font: string;
  currency: string;
  secondary_color: string;
  seo: Seo;
  slug: string;
  status: boolean;
  third_color: string;
  social_media: SocialMedia[];
};

export type ExternalFile = {
  name: string;
  path: string;
};
export type TourSection = {
  uuid: string;
  title: string;
  description: string;
  image: string;
};

export type TourPrice = {
  uuid: string;
  price: number;
  balcony_price: number;
  internal_price: number;
  sea_view_price: number;
  date: Date;
  include_all_month: boolean;
  one_price: boolean;
};

export type TourFeature = {
  uuid: string;
  title: string;
  description: string;
};

export type Hotel = {
  created_at: string;
  id: number;
  images: string[];
  name: string;
  rating: number;
};

export type TourHotels = {
  created_at: string;
  tour_id: number;
  hotel_id: number;
};
export type TourType = {
  created_at: string;
  id: number;
  image: string;
  name: string;
};

export type Location = {
  created_at: string;
  id: number;
  image: Image;
  is_active: boolean;
  name: string;
  seo: Seo;
  slug: string;
  is_office: boolean;
  location_attributes: LocationAttributes[];
};

export type LocationTours = {
  id: number;
  location_attr_id: number;
  location_id: number;
  tour_id: number;
  created_at: string;
  location_attributes: LocationAttributes;
};
export type LocationAttributes = {
  id: number;
  order: number;
  seo: Seo;
  title: string;
  created_at: string;
  location_id: number;
  location_tours: LocationTours[];
};

export type Image = {
  url: string;
  size: number;
  order: number;
  alt: string;
};

export type Seo = {
  title: string;
  description: string;
  tags: string;
};
export type User = {
  email: string;
  password: string;
};

export type Customer = {
  contact_method: string;
  created_at: string;
  id: number;
  name: string;
  notes: string;
  phone_number: string;
  status: number;
  tour_id: number;
  tour: Tour;
};
export type Response<T> = {
  message: string;
  success: boolean;
  result: T;
  results: T[];
};

export type Setting = {
  home: Home;
  about: Seo;
  visa: Visa;
  faq: Faq[];
  best_tours: BestTours;
};

export type BestTours = {
  tours: number[];
  seo: Seo;
};

export type Home = {
  sliders: Slider[];
  seo: Seo;
  best_sellers: number[];
  best_seller_title: "";
};

export type Visa = {
  visa_types: VisaType[];
  seo: Seo;
};

export type Faq = {
  uuid: string;
  title: string;
  description: string;
};

export type VisaType = {
  title: string;
  sub_title: string;
  image: string;
  period: string;
  requirements: string[];
  price: string;
  note: string;
  uuid: string;
};

export type Slider = {
  uuid: string;
  image: string;
  title: string;
  sub_title: string;
  call_to_action: string;
  call_to_action_link: string;
};

export type SocialMedia = {
  uuid: string;
  url: string;
  media: string;
};
