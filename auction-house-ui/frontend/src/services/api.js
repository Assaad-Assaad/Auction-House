const BASE_URL = "http://localhost:8080/api/v1";

export const getAllCategories = async () => {
    try {
        const response = await fetch(`${BASE_URL}/categories`);
        if (!response.ok) {
            // Get actual error message from server
            const errorData = await response.json();
            throw new Error(errorData.message || "Request failed");
        }
        return await response.json();
    } catch (error) {
        console.error("Fetch error:", error.message);
        throw error; // Propagate error to component
    }
};


export const getAuctionsAssignedToCategory = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/categories/${id}/auctions`);
        if (!response.ok) {
            // Get actual error message from server
            const errorData = await response.json();
            throw new Error(errorData.message || "Request failed");
        }
        return await response.json();
    } catch (error) {
        console.error("Fetch error:", error.message);
        throw error; // Propagate error to component
    }
};

export const getAllAuctions = async () => {
    try {
        const response = await fetch(`${BASE_URL}/auctions`);
        if (!response.ok) {
            // Get actual error message from server
            const errorData = await response.json();
            throw new Error(errorData.message || "Request failed");
        }
        return await response.json();
    } catch (error) {
        console.error("Fetch error:", error.message);
        throw error; // Propagate error to component
    }
};

export const getAuctionById = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/auctions/${id}`);
        if (!response.ok) {
            // Get actual error message from server
            const errorData = await response.json();
            throw new Error(errorData.message || "Request failed");
        }
        return await response.json();
    } catch (error) {
        console.error("Fetch error:", error.message);
        throw error; // Propagate error to component
    }
};

// Bid on an auction
export const placeBid = async (auctionId, bidData) => {
  const response = await fetch(`/api/v1/auctions/${auctionId}/bids`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`, 
    },
    body: JSON.stringify(bidData),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to place bid');
  }

  return await response.json();
};


