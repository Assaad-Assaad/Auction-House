import '../css/Home.css';
import CategoryCard from '../components/CategoryCard';
import { useState, useEffect } from 'react';
import { getAllCategories } from '../services/api.js';

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await getAllCategories();
        setCategories(data);
      } catch (err) {
        setError("Failed to load categories");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, []);

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="home">
      <div className="home-banner">
        <h1>Welcome to Auction House</h1>
        <p>Find exclusive items and bid now!</p>
        {/* Search Bar */}
        <form className="search-form">
          <input
            type="text"
            placeholder="Search for category..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
      </div>

      {/* Display filtered categories */}
      {searchQuery && filteredCategories.length === 0 ? (
        <p>No categories match your search.</p>
      ) : (
        <div className="category-grid">
          {filteredCategories.map((category) => {
            const simpleCategory = {
              id: category.id,
              name: category.name,
              image: category.image,
            };
            return <CategoryCard category={simpleCategory} key={category.id} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Home;
