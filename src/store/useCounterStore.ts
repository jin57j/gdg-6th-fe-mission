import { create } from 'zustand';

// 1. 스토어의 데이터(상태)와 함수들의 타입 정의 (TypeScript)
interface CounterState {
  counter: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

// 2. create 함수를 통해 전역 상태 공간(Store) 생성
export const useCounterStore = create<CounterState>(set => ({
  // 초깃값 (상태)
  counter: 0,

  // 상태를 변경하는 액션 함수들 (간접 방식의 매커니즘을 쉽게 풀어냄)
  increment: () => set(state => ({ counter: state.counter + 1 })),
  decrement: () => set(state => ({ counter: state.counter - 1 })),
  reset: () => set({ counter: 0 }), // 변수를 직접 수정하지 않고 set() 관문을 거침
}));
