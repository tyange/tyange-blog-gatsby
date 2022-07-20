import create from "zustand";
import { Reading } from "../types/types";

interface StoreType {
  selectedCategory: string | null;
  setSelectedCategory: (category: string) => void;
  selectedPageNum: number;
  setSelectedPageNum: (pageNum: number) => void;
  readings: Reading[] | null;
  setReadings: (readings: Reading[]) => void;
}

export const useBlogStore = create<StoreType>((set) => ({
  selectedCategory: "",
  setSelectedCategory: (category) => {
    set(() => ({ selectedCategory: category }));
  },
  selectedPageNum: 1,
  setSelectedPageNum: (pageNum) => {
    set(() => ({ selectedPageNum: pageNum }));
  },
  readings: null,
  setReadings: (readings) => {
    set(() => ({ readings: readings }));
  },
}));
