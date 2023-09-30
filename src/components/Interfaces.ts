import { HairColor } from "./Enums";

export interface Props {
  name: string;
  age: number;
  email: string;
  //getName: (name: string) => string;
  hairColor: HairColor;
}
