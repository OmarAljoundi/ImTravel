import { IOffice } from "@/interface/Office";
import { create } from "zustand";

interface OfficeState {
  office: IOffice | undefined;
  setOffice: (office: IOffice) => void;
  discardOffice: () => void;
}

export const useDomainStore = create<OfficeState>()((set) => ({
  office: undefined,
  setOffice: (office) => set((state) => ({ office: office })),
  discardOffice: () => set((state) => ({ office: undefined })),
}));
