import "../css/Home.css";
import CategoryCard from "../components/CategoryCard";
import { useState, useEffect } from "react";
import { getAllCategories } from "../services/Api";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const categories = await getAllCategories();
        setCategories(categories);
      } catch (err) {
        console.log(err);
        setError("Fail to load categories");
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for category..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="category-grid">
        {categories.map((category) => {
          const simpleCategory = {
            id: category.id,
            name: category.name,
            image: category.image,
          };
          return <CategoryCard category={simpleCategory} key={category.id} />;
        })}
      </div>
    </div>
  );
}

export default Home;