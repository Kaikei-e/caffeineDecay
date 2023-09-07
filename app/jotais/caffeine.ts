import {atom} from "jotai/vanilla/atom";
import {caffeineInfo} from "@/app/types/caffeineInfo";

const caffeine = atom<caffeineInfo>({
    caffeineAmount: 0,
    consumedDateTime: new Date()
});


