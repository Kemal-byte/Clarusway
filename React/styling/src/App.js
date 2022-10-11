import "./App.scss";
import Header from "./component/Header/Header";
import Navbar from "./component/Navbar/Navbar";
import Main from "./component/Main/Main";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Main />
    </div>
  );
};

export default App;
