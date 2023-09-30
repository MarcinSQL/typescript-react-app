import { FC, useState, ChangeEvent } from "react";
import { Props } from "./Interfaces";

export const Person: FC<Props> = (props) => {
  const [country, setCountry] = useState<string | null>(null);

  type NameType = "Pedro" | "Jack";
  const nameForType: NameType = "Jack";

  const onCountryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
      <input
        onChange={onCountryChange}
        placeholder="Write down your country..."
      />
      {country}
      {props.hairColor}
    </div>
  );
};
