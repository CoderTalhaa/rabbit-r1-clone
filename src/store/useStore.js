import create from "zustand";

const useModelStore = create((set) => ({
  model1Ref: null,
  setModel1Ref: (ref) => set({ model1Ref: ref }),
  model2Ref: null,
  setModel2Ref: (ref) => set({ model2Ref: ref }),
  anim: "null",
  setAnim: (anim) => set({ anim }),
}));

export default useModelStore;
