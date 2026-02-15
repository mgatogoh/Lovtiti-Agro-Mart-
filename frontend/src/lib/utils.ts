import {clsx}  from 'clsx';
import {twMerge} from "tailwind-merge";

export function classes(...inputs: Parameters<typeof clsx>){
    return twMerge(clsx(inputs));
}
