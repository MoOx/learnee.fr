import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const mail = "contact/learnee.fr";
export const sendStringAsMailString = (str: string = mail) =>
  str.replace("/", "@");
