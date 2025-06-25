import "../css/AuctionCard.css";
import { Link } from "react-router-dom";

function AuctionCard({ auction }) {
  return (
    <div className="auction-card">
      <img
        src={auction.image}
        alt={auction.productName}
        className="auction-img"
      />
      <div className="auction-info">
        <h3>{auction.productName}</h3>
        <p>{auction.description}</p>
        <p>
          <strong>Start Price:</strong> ${auction.startPrice}
        </p>
        <p>
          <strong>Ends At:</strong> {new Date(auction.endTime).toLocaleString()}
        </p>
        <Link to={`/auctions/${auction.id}`}>
          <button className="view-details-button">View Details</button>
        </Link>
      </div>
    </div>
  );
}

export default AuctionCard;
