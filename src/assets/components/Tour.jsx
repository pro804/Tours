const Tour = ({ id, image, info, name, price, removeTour }) => {
  return (
    <article key={id}>
      <img src={image} alt={name} className="img" />
      <span> ${price} </span>
      <div>
        <h5>{name}</h5>
        <p>{info}</p>
        <button onClick={() => removeTour(id)}>not interested</button>
      </div>
    </article>
  );
};

export default Tour;
