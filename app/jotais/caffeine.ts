import { atom } from "jotai";
import { caffeineInfo } from "@/app/types/caffeineInfo";

export const caffeineAtom = atom<caffeineInfo>({
  caffeineAmount: 0,
  consumedDateTime: "",
});
