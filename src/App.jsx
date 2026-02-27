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


const App = () => {
    return (
        <>
            <FunctionBased/>
            {/* <ClassBased/>
            <StatesInFBC/> */}

            {/* <ThemeChange/> */}
            {/* <Counter/> */}

            {/* <StateTask1/> */}

            {/* <StatesInCBC/> */}

            {/* <PropsParent/> */}

        </>
    );
};
export default App;




