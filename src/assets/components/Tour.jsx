import { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article key={id}>
      <img src={image} alt={name} className="img" />
      <span> ${price} </span>
      <div>
        <h5>{name}</h5>
        <div>
          <p>
            {readMore ? info : `${info.substring(0, 200)}...`}
            <button type="button" onClick={() => setReadMore(!readMore)}>
              {readMore ? "show less" : " show more"}
            </button>
          </p>
        </div>
        <button type="button" onClick={() => removeTour(id)}>
          not interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
