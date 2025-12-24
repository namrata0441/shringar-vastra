import "./Productsection.css";
import Productcard from "../Productcard/Productcard";

// import images from assets index
import { chetriDress, magar, gurung, saree } from "../../assets";

const Productsection = ({ title }) => {
  const products = [
    {
      id: 1,
      name: "Newari Set",
      price: 5000,
      img: chetriDress,
    },
    {
      id: 2,
      name: "Gurung Dress",
      price: 3200,
      img: gurung,
    },
    {
      id: 3,
      name: "Magar Dress",
      price: 2500,
      img: magar,
    },
    {
      id: 4,
      name: "Traditional Saree",
      price: 2800,
      img: saree,
    },
  ];

  return (
    <section className="product-section">
      <div className="product-title">{title}</div>

      <div className="product-row">
        {products.map((item) => (
          <Productcard
            key={item.id}
            name={item.name}
            price={item.price}
            img={item.img}
          />
        ))}
      </div>
    </section>
  );
};

export default Productsection;
