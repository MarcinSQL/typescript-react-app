import React, {FC} from "react";
import "./App.css";
import { Person, HairColor }  from "./components/Person";

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

  return <div className="App">
    <Person name={"Pedro"} age={26} email={`test@test.com`} hairColor={HairColor.Pink}/>
  </div>;
}

export default App;
