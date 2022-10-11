const Card = (items) => {
  const { title, image, desc } = items;
  return (
    <div className="cards">
      <div className="title">
        <h1>{title}</h1>
      </div>
      <img src={image} alt="" />
      <div className="card-over">{desc}</div>
    </div>
  );
};

export default Card;
