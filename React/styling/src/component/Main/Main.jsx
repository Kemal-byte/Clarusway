import "./Main.scss";
import { data } from "../../helper/data";
import Cards from "./Card";

const Main = () => {
  return (
    <div className="card-container">
      {data.map((items, i) => (
        <Cards {...items} />
      ))}
    </div>
  );
};

export default Main;
