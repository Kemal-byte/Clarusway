import { data } from "../../helper/data";

const Card = (items) => {
  return (
    <div className="cards">
      <h1>{items.title}</h1>
    </div>
  );
};

export default Card;
