import "./Catitem.css";

const Catitem = ({ name, img }) => {
  return (
    <div className="category-card">
      <div className="category-img-box">
        <img src={img} alt={name} />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default Catitem;
