import logo from "./logo.svg";
import "./App.css";
import React, { useReducer } from "react";
import MaterialForm from "./component/MaterialForm";
import HooksCounter from "./component/HooksCounter";
import HooksCounter3 from "./component/HookCounter3";
import HooksCounter4 from "./component/HookCounter4";
import HookMouse from "./component/HookMouse";
import MouseContainer from "./component/MouseContainer";
import IntervalHookCounter from "./component/IntervalHookCounter";
import DataFetching from "./component/DataFetching";
import CompA from "./Nested Component/CompA";
import CompAA from "./Reducer/CompA";
import CounterOne from "./Reducer/CounterOne";
import CounterTwo from "./Reducer/CounterTwo";
import CounterThree from "./Reducer/CounterThree";
import CompB from "./Reducer/CompB";
import CompC from "./Reducer/CompC";
import Data from "./Reducer/DataFetching";
import DataFetchingTwo from "./Reducer/DataFetchingTwo";
import ParentComponent from "./CallBack/ParentComponent";
import Counter from "./UseMemo/Counter";
import FocusInput from "./UseRef/FocusInput";
import HookTimer from "./UseRef/HookTimer";
import DockTitleOne from "./UseRef/DockTitleOne";
import CounterValue from "./CustomHooks/CounterValue";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
export const CountContext = React.createContext();

const initialSatate = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decriment":
      return state - 1;
    case "reset":
      return initialSatate;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialSatate);

  return (
    <div className="App">
      <p>
        ====================================================================================================
      </p>
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        App.js Counter-{count}
        <CompAA />
        <CompB />
        <CompC />
      </CountContext.Provider>
      <p>
        ====================================================================================================
      </p>

      <Data />
      <p>
        ====================================================================================================
      </p>
      <DataFetchingTwo />
      <p>
        ====================================================================================================
      </p>
      <CounterOne />
      <p>
        ====================================================================================================
      </p>
      <CounterTwo />
      <p>
        ====================================================================================================
      </p>
      <CounterThree />
      <p>
        ====================================================================================================
      </p>

      <DataFetching />
      <p>
        ====================================================================================================
      </p>
      <UserContext.Provider value={"Harsh Singh"}>
        <ChannelContext.Provider value={"Raghuvansi"}>
          <CompA />
        </ChannelContext.Provider>
      </UserContext.Provider>
      <p>
        ====================================================================================================
      </p>
      <MaterialForm />
      <p>
        ====================================================================================================
      </p>
      <HooksCounter />
      <p>
        ====================================================================================================
      </p>
      <HooksCounter3 />
      <p>
        ====================================================================================================
      </p>
      <HooksCounter4 />
      <p>
        ====================================================================================================
      </p>
      <HookMouse />
      <p>
        ====================================================================================================
      </p>
      <MouseContainer />
      <p>
        ====================================================================================================
      </p>
      <IntervalHookCounter />
      <p>
        ====================================================================================================
      </p>
      <ParentComponent />
      <p>
        ====================================================================================================
      </p>
      <Counter />
      <p>
        ====================================================================================================
      </p>
      <FocusInput />
      <p>
        ====================================================================================================
      </p>
      <HookTimer />
      <p>
        ====================================================================================================
      </p>
      <DockTitleOne />
      <p>
        ====================================================================================================
      </p>
      <CounterValue />
    </div>
  );
}

export default App;
