// pages/AuctionDetails.jsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../css/AuctionDetails.css';
import { getAuctionWithBidInfo, placeBid } from '../services/api.js';
import BidCard from '../components/BidCard.jsx';
import { toast } from 'react-toastify';

function AuctionDetails() {
  const { id } = useParams();
  const [auction, setAuction] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [isBidding, setIsBidding] = useState(false);

  useEffect(() => {
  const fetchData = async () => {
    try {
      const data = await getAuctionWithBidInfo(id);
      setAuction(data);
    } catch (err) {
      setError(err.message || "Failed to load auction");
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, [id]);

  const handlePlaceBid = async (amount) => {
  setIsBidding(true);
  try {
    await placeBid(parseInt(id), amount);
    toast.success("Bid placed successfully!");
    
    
    const updatedAuction = await getAuctionById(id);
    setAuction(updatedAuction);
  } catch (err) {
    toast.error(err.message || 'Failed to place bid');
  } finally {
    setIsBidding(false);
  }
};

  const isAuthenticated = () => {
    return !!localStorage.getItem('token');
  };

  if (loading) return <div className="loading-container">Loading...</div>;
  if (error) return <div className="error-container">{error}</div>;
  if (!auction) return <div className="not-found">Auction not found</div>;

  return (
    <div className="auction-details-container">
      <div className="auction-left">
        <div className="image-container">
          {auction.image ? (
            <img 
              src={auction.image} 
              alt={auction.productName || "Product"} 
              className="main-auction-img" 
            />
          ) : (
            <div className="image-placeholder">
              <span>No Image Available</span>
            </div>
          )}
        </div>

        <div className="product-details">
          <h1 className="product-title">{auction.productName || "Unnamed Product"}</h1>
          <div className="product-meta">
            <span>Auction ID: #{auction.id}</span>
            <span>Listed by: {auction.seller || "Unknown"}</span>
            <span>Ended at: {auction.endTime || "Unknown"}</span>
          </div>
          <div className="description-container">
            <h3>Description</h3>
            <p className="product-description">
              {auction.description || "No description available."}
            </p>
          </div>
        </div>
      </div>

      <div className="auction-right">
        <BidCard
          auction={auction}
          onPlaceBid={handlePlaceBid}
          isAuthenticated={isAuthenticated()}
          
          isBidding={isBidding}
        />
        
        <div className="bid-history">
          <h3>Bid History</h3>
          {auction.bids && auction.bids.length > 0 ? (
            <div className="bid-list">
              {auction.bids.map((bid, index) => (
                <div key={index} className="bid-item">
                  <span className="bidder">{bid.bidderName || "Anonymous"}</span>
                  <span className="bid-amount">€{bid.amount.toFixed(2)}</span>
                  <span className="bid-time">{new Date(bid.timestamp).toLocaleString()}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-bids">No bids placed yet</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuctionDetails;