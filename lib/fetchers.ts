export const revalidate = false;
import { IOfficeResponse } from "@/interface/IOfficeResponse";
import { ILocationResponse, ITourResponse } from "@/interface/Response";
import { SearchQuery, eFilterOperator } from "@/interface/Search";
import { http } from "@/service/httpService";
import { unstable_cache } from "next/cache";
import { daysFilter } from "./utils";

export async function getSiteData(domain: string) {
  const subdomain = domain.endsWith(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`)
    ? domain.replace(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`, "")
    : null;

  if (subdomain == null || subdomain.includes("www")) return undefined;
  var response = await http<IOfficeResponse>(
    `/Office/Search?slug=${subdomain}`
  ).get();

  return response.office.status == true ? response.office : undefined;
}

export async function getSitesData() {
  return (await http<IOfficeResponse>("/Office/Search").get()).offices;
}

export async function getBestTours() {
  const searchQuery: SearchQuery = {
    FilterByOptions: [],
    OrderByOptions: [],
    PageIndex: 0,
    PageSize: 8,
  };
  const result = await http<ITourResponse>("/Tour/SearchGeneral").post(
    searchQuery
  );

  return result;
}

export async function getTours(
  tourIds: string,
  country?: string | null,
  days?: "t1" | "t2" | "t3" | string | null,
  maxPrice?: number,
  pageSize?: number
) {
  console.log("maxPrice", maxPrice);
  var _SQ: SearchQuery = {
    FilterByOptions: [],
    OrderByOptions: [],
    PageIndex: 0,
    PageSize: pageSize ?? 0,
  };

  _SQ.FilterByOptions.push({
    FilterFor: tourIds,
    MemberName: "idsList",
    FilterOperator: eFilterOperator.EqualsToList,
  });
  if (maxPrice) {
    _SQ.FilterByOptions.push({
      FilterFor: maxPrice,
      FilterOperator: eFilterOperator.EqualsTo,
      MemberName: "maxprice",
    });
  }
  if (country) {
    _SQ.FilterByOptions.push({
      FilterFor: country,
      FilterOperator: eFilterOperator.EqualsTo,
      MemberName: "country",
    });
  }

  if (days) {
    const period = daysFilter.find((x) => x.value == days);
    if (period) {
      _SQ.FilterByOptions.push({
        FilterFor: period.period_min,
        FilterOperator: eFilterOperator.EqualsTo,
        MemberName: "period_min",
      });
      _SQ.FilterByOptions.push({
        FilterFor: period.period_max,
        FilterOperator: eFilterOperator.EqualsTo,
        MemberName: "period_max",
      });
    }
  }

  const result = await http<ITourResponse>("/Tour/SearchBusiness").post(_SQ);

  return result;
}

export async function getTourBySlug(slug: string) {
  var _SQ: SearchQuery = {
    FilterByOptions: [],
    OrderByOptions: [],
    PageIndex: 0,
    PageSize: 0,
  };

  _SQ.FilterByOptions.push({
    FilterFor: slug?.replaceAll("-", " "),
    FilterOperator: eFilterOperator.EqualsTo,
    MemberName: "Name",
  });
  const result = await http<ITourResponse>("/Tour/Search").post(_SQ);

  return result;
}

export async function getDestination() {
  var _SQ: SearchQuery = {
    FilterByOptions: [],
    OrderByOptions: [],
    PageIndex: 0,
    PageSize: 0,
  };

  _SQ.FilterByOptions.push({
    FilterFor: true,
    FilterOperator: eFilterOperator.EqualsTo,
    MemberName: "ActiveBusiness",
  });

  const result = await http<ILocationResponse>("/Location/Search").post(_SQ);
  return result;
}
