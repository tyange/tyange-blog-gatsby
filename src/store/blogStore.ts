import create from "zustand";
import { Reading } from "../types/types";

interface StoreType {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  selectedPageNum: number;
  setSelectedPageNum: (pageNum: number) => void;
  chunkedReadings: Reading[][];
  setChunkedReadings: (readings: Reading[][]) => void;
}

export const useBlogStore = create<StoreType>((set) => ({
  selectedCategory: null,
  setSelectedCategory: (category) => {
    set(() => ({ selectedCategory: category }));
  },
  selectedPageNum: 0,
  setSelectedPageNum: (pageNum) => {
    set(() => ({ selectedPageNum: pageNum }));
  },
  chunkedReadings: [],
  setChunkedReadings: (readings) => {
    set(() => ({ chunkedReadings: readings }));
  },
}));
