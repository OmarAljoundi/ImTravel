import { QueryOfficeSchema, QueryTourSchema } from "@/schema";
import { create } from "zustand";

interface OfficeState {
  office:
    | {
        bestTours: QueryTourSchema[];
        details: QueryOfficeSchema;
        faq: { id: string; title: string; description: string }[];
        pricingFilter: {
          arCurrency: string;
          minPrice: number;
          maxPrice: number;
        };
      }
    | undefined;
  setOffice: (office: {
    bestTours: QueryTourSchema[];
    details: QueryOfficeSchema;
    faq: { id: string; title: string; description: string }[];
    pricingFilter: { arCurrency: string; minPrice: number; maxPrice: number };
  }) => void;
  discardOffice: () => void;
}

export const useDomainStore = create<OfficeState>()((set) => ({
  office: undefined,
  setOffice: ({ bestTours, details, faq, pricingFilter }) =>
    set(() => ({ office: { bestTours, details, faq, pricingFilter } })),
  discardOffice: () => set(() => ({ office: undefined })),
}));
