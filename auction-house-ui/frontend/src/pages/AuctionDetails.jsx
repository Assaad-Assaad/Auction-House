import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../css/AuctionDetails.css";
import { getAuctionById, placeBid } from "../services/api.js";
import BidCard from '../components/BidCard.jsx';


function AuctionDetails() {
  const { id } = useParams();
  const [auction, setAuction] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAuction = async () => {
      try {
        const data = await getAuctionById(id);
        setAuction(data);
      } catch (err) {
        setError(err.message || 'Failed to load auction');
      } finally {
        setLoading(false);
      }
    };
    loadAuction();
  }, [id]);

  const handlePlaceBid = async (amount) => {
    try {
      await placeBid(parseInt(id), amount);
      alert('Bid placed successfully!');
      // Optionally refresh auction data here
    } catch (err) {
      setError(err.message || 'Failed to place bid');
    }
  };

  const isAuthenticated = () => {
    return !!localStorage.getItem('token'); // adjust based on your auth method
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!auction) return <p>Auction not found</p>;

return (
  <div className="auction-details-container">
    {/* Left Side */}
    <div className="auction-left">
      {auction.image ? (
        <img src={auction.image} alt={auction.productName || "Product"} className="main-auction-img" />
      ) : (
        <div className="image-placeholder">No Image Available</div>
      )}

      <h2 className="product-title">{auction.productName || "Unnamed Product"}</h2>
      <p className="product-description">{auction.description || "No description available."}</p>
    </div>

    {/* Right Side */}
    <div className="auction-right">
      <BidCard
        auction={auction}
        onPlaceBid={handlePlaceBid}
        isAuthenticated={isAuthenticated()}
        error={error}
      />
    </div>
  </div>
);

}

export default AuctionDetails;