import React, { FC, createContext } from "react";
import "./App.css";
import { Person } from "./components/Person";
import { HairColor } from "./components/Enums";

interface AppContextInterface {
  name: string;
  age: number;
  country: string;
}

const AppContext = createContext<AppContextInterface | null>(null);

const App: FC = () => {
  //TS deff
  // const name: string = "Pedro";
  // const age: number = 32;
  // const isMarried: boolean = false;

  // const getName = (name: string): number => {
  //   if(name === "Pedro"){
  //     return 20;
  //   } else {
  //     return 0;
  //   }
  // }

  const contextValue: AppContextInterface = {
    name: "Pedro",
    age: 20,
    country: "Brazil",
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <Person
          name={"Pedro"}
          age={26}
          email={`test@test.com`}
          hairColor={HairColor.Pink}
        />
      </div>
    </AppContext.Provider>
  );
};

export default App;
