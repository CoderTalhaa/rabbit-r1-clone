import create from "zustand";

const useModelStore = create((set) => ({
  model1Ref: null,
  setModel1Ref: (ref) => set({ model1Ref: ref }),
  model2Ref: null,
  setModel2Ref: (ref) => set({ model2Ref: ref }),
  anim: "null",
  setAnim: (anim) => set({ anim }),
  light: false,
  setLight: () => set((state) => ({ light: !state.light })),
  cursorPosition: { x: 0, y: 0 },
  setCursorPosition: (x, y) => set({ cursorPosition: { x, y } }),
}));

export default useModelStore;
