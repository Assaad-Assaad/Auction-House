import { Link } from "react-router-dom";
import "../css/CategoryCard.css";

function CategoryCard({ category }) {
  return (
    <div className="category-card">
      <div className="category-poster">
        <img src={category.image} alt={category.name} />
      </div>
      <div className="category-info">
        <h3>{category.name}</h3>
        <Link to={`/auctions/category/${category.id}`}>
          <button className="explore-button">Explore Auctions</button>
        </Link>
      </div>
    </div>
  );
}

export default CategoryCard;

