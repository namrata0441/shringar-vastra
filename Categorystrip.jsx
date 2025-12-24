import "./Categorystrip.css";
import Catitem from "../Catitem/Catitem";
import { anarkali, kurti, saree, handbag } from "../../assets";

const Categorystrip = () => {
  const categories = [
    { name: "Cultural", img: anarkali },
    { name: "Kurti", img: kurti },
    { name: "Saree", img: saree },
    { name: "Hand bag", img: handbag },
  ];

  return (
    <section className="category-section">
      <div className="category-bar">
        <span>Category</span>
        <span className="see-all">See all</span>
      </div>

      <div className="category-row">
        {categories.map((item) => (
          <Catitem
            key={item.name}
            name={item.name}
            img={item.img}
          />
        ))}
      </div>
    </section>
  );
};

export default Categorystrip;
