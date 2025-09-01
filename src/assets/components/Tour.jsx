const Tour = ({ id, image, info, name, price }) => {
  return (
    <article key={id}>
      <img src={image} alt={name} className="img" />
      <span> ${price} </span>
      <div>
        <h5>{name}</h5>
        <p>{info}</p>
      </div>
    </article>
  );
};

export default Tour;
