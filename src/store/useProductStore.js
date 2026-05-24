import { create } from 'zustand';
import { fetchCategoryData, fetchPriceSelectedData, fetchSortedData } from '../apis/productApi';

export const useProductStore = create(set => ({
  items: [],
  minPrice: '0',
  maxPrice: '0',
  isLoading: false,

  // 전체 또는 카테고리별 데이터 로드
  loadCategoryData: async () => {
    set({ isLoading: true });
    const data = await fetchCategoryData();
    if (data) set({ items: data });
    set({ isLoading: false });
  },

  // 가격 필터 데이터 로드
  loadPriceData: async () => {
    set({ isLoading: true });
    const data = await fetchPriceSelectedData();
    if (data) {
      set({
        items: data.items || [],
        minPrice: data.low || 0,
        maxPrice: data.high || 0,
      });
    }
    set({ isLoading: false });
  },

  // 정렬 데이터 로드
  loadSortedData: async () => {
    set({ isLoading: true });
    const data = await fetchSortedData();
    if (data) set({ items: data });
    set({ isLoading: false });
  },

  // 클라이언트 측 상태 변경 함수
  setItems: newItems => set({ items: newItems }),
  setMinPrice: price => set({ minPrice: price }),
  setMaxPrice: price => set({ maxPrice: price }),
}));
