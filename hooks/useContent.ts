import { Setting } from "@/types/custom";
import { create } from "zustand";

interface ContentState {
  content: Setting | undefined;
  setContent: (content?: Setting) => void;
  discardContent: () => void;
}

export const useContentStore = create<ContentState>()((set) => ({
  content: undefined,
  setContent: (content) => set((state) => ({ content: content })),
  discardContent: () => set((state) => ({ content: undefined })),
}));
