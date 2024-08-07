"use server";

import { supabaseClient } from "./supabaseClient";
import { http } from "@/service/httpService";
import {
  CONFIG_PATH,
  REVALIDATE_CUSTOMER_LIST,
  REVALIDATE_LOCATION_LIST,
  REVALIDATE_OFFICE_LIST,
  REVALIDATE_TOUR_LIST,
  REVALIDATE_TOUR_TYPE,
  SETTING_PATH,
} from "./keys";
import { formatDistance, subDays } from "date-fns";
import {
  Customer,
  Location,
  Office,
  Response,
  Setting,
  Tour,
  TourType,
} from "@/types/custom";
import { Order, SearchQuery } from "@/types/search";
import { createClientLink } from "./helpers";
import { unstable_cache } from "next/cache";
import { GlobalSearch } from "./server-actions";

export async function getSiteData(domain: string) {
  const subdomain = domain.endsWith(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`)
    ? domain.replace(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`, "")
    : null;
  var response = await getSitesData();
  var office = response?.find((x) => x.slug == subdomain);
  return office && office.status == true ? office : undefined;
}

export const getSitesData = unstable_cache(
  async () => {
    var _SQ: SearchQuery = {
      FilterByOptions: [],
      OrderByOptions: [],
      PageIndex: 0,
      PageSize: 100,
      Select: "*",
      Table: "office",
    };
    var response = await GlobalSearch<Office>(_SQ);
    return response.results;
  },
  [REVALIDATE_OFFICE_LIST],
  {
    tags: [REVALIDATE_OFFICE_LIST],
    revalidate: 86400,
  }
);

export const getTourTypes = unstable_cache(
  async () => {
    var _SQ: SearchQuery = {
      FilterByOptions: [],
      OrderByOptions: [],
      PageIndex: 0,
      PageSize: 100,
      Select: "*",
      Table: "tour_type",
    };
    var response = await GlobalSearch<TourType>(_SQ);
    return response.results;
  },
  [REVALIDATE_TOUR_TYPE],
  {
    tags: [REVALIDATE_TOUR_TYPE],
    revalidate: 86400,
  }
);

export const getDestination = unstable_cache(
  async () => {
    var _SQ: SearchQuery = {
      FilterByOptions: [],
      OrderByOptions: [{ MemberName: "created_at", SortOrder: Order.DESC }],
      PageIndex: 0,
      PageSize: 1000,
      Select: "*,location_attributes(*,location_tours(*))",
      Table: "location",
    };
    var response = await GlobalSearch<Location>(_SQ);

    return response.results?.filter((x) => x.is_office == true);
  },
  [REVALIDATE_LOCATION_LIST],
  {
    tags: [REVALIDATE_LOCATION_LIST],
    revalidate: 86400,
  }
);

export const getTours = unstable_cache(
  async () => {
    var _SQ: SearchQuery = {
      FilterByOptions: [],
      OrderByOptions: [],
      PageIndex: 0,
      PageSize: 1000,
      Select: "*,tour_type(*)",
      Table: "tour",
    };
    var response = await GlobalSearch<Tour>(_SQ);

    return response.results;
  },
  [REVALIDATE_TOUR_LIST],
  {
    tags: [REVALIDATE_TOUR_LIST],
    revalidate: 86400,
  }
);

export const getContentData = async () => {
  const { data, error } = await supabaseClient.storage
    .from("mundo_tours")
    .list(SETTING_PATH);

  let responseData: Setting | undefined;

  if (
    data &&
    data.length > 0 &&
    data.find((x: any) => x.name === CONFIG_PATH)
  ) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_IMAGE_URL}/${SETTING_PATH}/${CONFIG_PATH}`,
      {
        next: { revalidate: 0 },
      }
    );

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    responseData = (await response.json()) as Setting;

    return responseData;
  }
};

export async function submitForm(formData: Customer) {
  const { data, error } = await supabaseClient
    .from("customer")
    .insert(formData)
    .select("*,tour(name)")
    .single();

  if (error) {
    console.log("error", error);
    return {
      error: error.details,
      success: false,
    };
  }
  var currentDate = formatDistance(
    subDays(new Date(data.created_at), 0),
    new Date(),
    { addSuffix: true }
  );
  await http<Response<any>>("/api/mail", { revalidate: 0 }).post({
    note: data.notes,
    tour_name: data.tour?.name,
    created_at: currentDate,
    customer_name: data.name,
    contact_option: data.contact_method,
    customer_number: data.phone_number,
  });

  await http<Response<any>>(`/api/revalidate?tag=${REVALIDATE_CUSTOMER_LIST}`, {
    revalidate: 0,
  }).get();

  return {
    success: true,
  };
}
