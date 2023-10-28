import { IOffice } from "@/interface/Office";
import { Office } from "@/types/custom";
import { create } from "zustand";

interface OfficeState {
  office: Office | undefined;
  setOffice: (office: Office) => void;
  discardOffice: () => void;
}

export const useDomainStore = create<OfficeState>()((set) => ({
  office: undefined,
  setOffice: (office) => set((state) => ({ office: office })),
  discardOffice: () => set((state) => ({ office: undefined })),
}));
