// import Home from "./pages/Home";
// import AllComp from "./pages/AllComp";
// import Login from "./pages/Login";
import CardComp from "./components/CardComp";
import FunctionalProps from "./components/Props/FunctionalProps";

const App = () => {
  return (
    <div className="flex flex-col">
      {/* <Home/> */}
      {/* <Login/> */}
      <CardComp />
      <FunctionalProps/>
      {/* <AllComp/> */}
    </div>
  );
};

export default App;
