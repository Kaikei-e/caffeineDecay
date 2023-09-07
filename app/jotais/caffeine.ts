import {atom} from "jotai/vanilla/atom";
import {caffeineInfo} from "@/app/types/caffeineInfo";

export const caffeineAtom = atom<caffeineInfo>({
    caffeineAmount: 0,
    consumedDateTime: new Date()
});