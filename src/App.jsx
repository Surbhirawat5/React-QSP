// import HeaderComp from "./components/HeaderComp";

// const App = () => {
//     let greet = "Welcome";

//     return (
//         <>
//             <h1>I Am parent Component</h1>
//             <h2>{greet}</h2>

//             <HeaderComp/>
//         </>
//     );
// };
// export default App;

//! belongs to FunctionBased and  ClassBased and StatesInFBC and so on

import FunctionBased from "./AllTopics/01_TypesOfComponents/FunctionBased";
import ClassBased from "./AllTopics/01_TypesOfComponents/ClassBased";
import StatesInFBC from "./AllTopics/02_States/StatesinFBC";
import ThemeChange from "./AllTopics/02_States/ThemeChange";
import Counter from "./AllTopics/02_States/Counter";
import StateTask1 from "./AllTopics/02_States/StatesTask1";
import StatesInCBC from "./AllTopics/02_States/StatesinCBC";
import PropsParent from "./AllTopics/03_Props/PropsParent";
import ChildrenProps from "./AllTopics/04_ChildrenProps/ChildrenProps";
import ChildrenProps2 from "./AllTopics/04_ChildrenProps/ChildrenProps2";
import Child1 from "./AllTopics/04_ChildrenProps/Child2";
import Child2 from "./AllTopics/04_ChildrenProps/Child1";
import UpliftingParent from "./AllTopics/05_StateUplifting/UpliftingParent";
import DrillingParent from "./AllTopics/06_PropsDrilling/DrilingParent";
import ContextParent from "./AllTopics/07_Context/ContextParent";
import ContextProvider from "./AllTopics/07_Context/ContextProvider";
import ControlledForms1 from "./AllTopics/08_Forms/ControlledForms1";
import Task1 from "./AllTopics/08_Forms/Task1";
import ControlledForm2 from "./AllTopics/08_Forms/ControlledForm2";
import TodoWrapper from "./TodoApp/TodoWrapper";
import CreateTodo from "./TodoApp/CreateTodo";
import AllTodos from "./TodoApp/AllTodos";
import TodoContextProvider from "./TodoApp/TodoContextProvider";
import ReactCss from "./AllTopics/09_ReactCss/ReactCss";
import TailwindPractice1 from "./AllTopics/10_TailwindCss/TailwindPractice1";
import UncontrolledForm from "./AllTopics/08_Forms/UncontrolledForm";
import LifeCycleInCbc from "./AllTopics/11_Life_Cycle/LifeCycleInCBC";
import { useState } from "react";
import LifeCycleInFbc from "./AllTopics/11_Life_Cycle/LifeCycleInFbc";

const App = () => {

  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle((prev) => !prev);


  return (
    <>
      {/* <FunctionBased/>
            <ClassBased/>
            <StatesInFBC/> */}

      {/* <ThemeChange/> */}

      {/* <Counter/> */}

      {/* <StateTask1/> */}

      {/* <StatesInCBC/> */}

      {/* <PropsParent/> */}

      {/* <ChildrenProps/>

            <ChildrenProps2>
                <Child1/>
                <Child2/>
            </ChildrenProps2>

            <UpliftingParent/>

            <DrillingParent/> */}

      {/* <ContextProvider>
            <ContextParent/>
          </ContextProvider> */}

      {/* <ControlledForms1/> */}

      {/* <Task1/> */}

      {/* <ControlledForm2/> */}


      {/* <TodoContextProvider>
        <TodoWrapper />
      </TodoContextProvider> */}


      {/* <ReactCss/> */}

      {/* <TailwindPractice1/> */}

      {/* <UncontrolledForm/> */}


      {/* <button onClick={handleToggle}>toggle me</button> 
      {toggle && <LifeCycleInCbc/>} */}


      <LifeCycleInFbc/>  

    </>
  );
};
export default App;
