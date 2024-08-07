import { createSearchParamsConfig } from "@search-params/react";
import {
  fallback,
  number,
  object,
  parse,
  string,
  optional,
  array,
  union,
  literal,
} from "valibot";
export const searchParamsSchema = object({
  page: fallback(number(), 1),
  country: fallback(optional(array(string())), []),
  days: fallback(optional(array(string())), []),
  maxprice: fallback(optional(number()), undefined),
  destination: fallback(optional(array(string())), []),
});

export const config = createSearchParamsConfig({
  home: (search) => parse(searchParamsSchema, search),
});
