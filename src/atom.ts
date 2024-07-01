import { atom, createStore } from "jotai";

export const bbtStore = createStore();

export const countAtom = atom(0);
bbtStore.set(countAtom, 1);
const unsub = bbtStore.sub(countAtom, () => {
  console.log("countAtom value is changed to", bbtStore.get(countAtom));
});
