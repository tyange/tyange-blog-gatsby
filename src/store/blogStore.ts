import create from "zustand";
import { Reading } from "../types/types";

interface StoreType {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  selectedPageNum: number;
  setSelectedPageNum: (pageNum: number) => void;
  readings: Reading[];
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
  readings: [],
  setReadings: (readings) => {
    set(() => ({ readings: readings }));
  },
}));
