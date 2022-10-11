import "./Main.scss";
import { data } from "../../helper/data";
import Cards from "./Card";

const Main = () => {
  return (
    <div className="card-container">
      {data.map((items, i) => (
        <Cards {...items} key={i} />
        // {...items} sends all the items from the loop.
      ))}
    </div>
  );
};

export default Main;
