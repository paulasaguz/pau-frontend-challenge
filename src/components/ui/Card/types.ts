import { Image, Button } from "@/hooks/useData/types";

export interface CardI {
  img?: Image;
  leadingText?: string;
  heading?: string;
  orientation?: "left" | "right";
  button?: Button;
};