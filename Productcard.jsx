import "./Productcard.css";

const Productcard = ({ img, name, price }) => {
  return (
    <div className="product-card">
      
      {/* Title */}
      <h4 className="product-name">{name}</h4>

      {/* Price */}
      <p className="product-price">Price Rs {price}</p>

      {/* Image */}
      <div className="product-img-box">
        <img src={img} alt={name} />
      </div>

      {/* Actions */}
      <div className="product-actions">
        <span className="buy-now">Buy Now</span>
        <span className="see-more">See More</span>
      </div>

    </div>
  );
};

export default Productcard;
