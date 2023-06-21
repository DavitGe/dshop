import create from "zustand";
import { persist } from "zustand/middleware";

export const cart = create(
  persist(
    (set) => ({
      data: [],
      setData: (data: any) => {
        set((state: any) => ({ data }));
      },
      addData: (data: any) => {
        set((state: any) => {
          const product = state.data.find((el: any) => el.id === data.id);
          console.log("state.data", product);
          if (product) {
            const temp = state.data.map((el: any) => {
              if (el.id === product.id) {
                return { ...product, count: product.count + 1 };
              } else {
                return el;
              }
            });
            return { data: temp };
          } else {
            return { data: [...state.data, { ...data, count: 1 }] };
          }
        });
      },
      increaseCount: (id: String) => {
        set((state: any) => {
          const product = state.data.find((el: any) => el.id === id);
          if (product) {
            const result = state.data.map((el: any) => {
              if (el.id === id) {
                return { ...el, count: el.count + 1 };
              }
              return el;
            });
            return { data: result };
          }
          return state;
        });
      },
      decreaseCount: (id: String) => {
        set((state: any) => {
          const product = state.data.find((el: any) => el.id === id);
          if (product) {
            const temp = state.data.map((el: any) => {
              if (el.id === id) {
                return { ...el, count: el.count - 1 };
              }
              return el;
            });
            const result = temp.filter((el: any) => el.count > 0);
            return { data: result };
          }
          return state;
        });
      },
    }),
    { name: "cart" }
  )
);
