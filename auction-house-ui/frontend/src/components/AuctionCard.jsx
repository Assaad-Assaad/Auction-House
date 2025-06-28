import '../css/AuctionCard.css';
import { Link } from 'react-router-dom';

function AuctionCard({ auction }) {
  // Function to parse the backend date format
  const parseBackendDate = (dateString) => {
    if (!dateString) return null;
    
    try {
      const [datePart, timePart] = dateString.split(' ');
      const [day, month, year] = datePart.split('-');
      const [hours, minutes, seconds] = timePart.split(':');
      
      return new Date(
        parseInt(year),
        parseInt(month) - 1, // Months are 0-indexed
        parseInt(day),
        parseInt(hours),
        parseInt(minutes),
        parseInt(seconds)
      );
    } catch (e) {
      console.error('Error parsing date:', e);
      return null;
    }
  };

  const formatDate = (dateString) => {
    const date = parseBackendDate(dateString);
    return date ? date.toLocaleString() : 'Invalid Date';
  };

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
          <strong>Ends At:</strong> {formatDate(auction.endTime)}
        </p>
        <Link to={`/auctions/${auction.id}`}>
          <button className="view-details-button">View Details</button>
        </Link>
      </div>
    </div>
  );
}

export default AuctionCard;