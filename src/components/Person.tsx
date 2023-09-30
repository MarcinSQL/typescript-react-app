import { FC, useState, ChangeEvent } from "react";

interface Props {
  name: string;
  age: number;
  email: string;
  //getName: (name: string) => string;
}

export const Person: FC<Props> = (props) => {
  const [country, setCountry] = useState<string | null>(null);

  const onCountryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  }

  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
      <input onChange={onCountryChange} placeholder="Write down your country..." />
      {country}
    </div>
  );
};
