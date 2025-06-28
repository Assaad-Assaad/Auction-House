const BASE_URL = "http://localhost:8080/api/v1";

export const getAllCategories = async () => {
    try {
        const response = await fetch(`${BASE_URL}/categories`);
        if (!response.ok) {
            
            const errorData = await response.json();
            throw new Error(errorData.message || "Request failed");
        }
        return await response.json();
    } catch (error) {
        console.error("Fetch error:", error.message);
        throw error; 
    }
};

export const getCategoryById = async (categoryId) => {
  try {
    const response = await fetch(`${BASE_URL}/categories/${categoryId}`);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to load category");
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error.message);
  }
};


export const getAuctionsAssignedToCategory = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/categories/${id}/auctions`);
        if (!response.ok) {
            
            const errorData = await response.json();
            throw new Error(errorData.message || "Request failed");
        }
        return await response.json();
    } catch (error) {
        console.error("Fetch error:", error.message);
        throw error; 
    }
};

export const getAllAuctions = async () => {
    try {
        const response = await fetch(`${BASE_URL}/auctions`);
        if (!response.ok) {
            
            const errorData = await response.json();
            throw new Error(errorData.message || "Request failed");
        }
        return await response.json();
    } catch (error) {
        console.error("Fetch error:", error.message);
        throw error; 
    }
};

export const getAuctionById = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/auctions/${id}`);
        if (!response.ok) {
            
            const errorData = await response.json();
            throw new Error(errorData.message || "Request failed");
        }
        return await response.json();
    } catch (error) {
        console.error("Fetch error:", error.message);
        throw error; 
    }
};

export const getAuctionWithBidInfo = async (auctionId) => {
  const auctionResponse = await fetch(`${BASE_URL}/auctions/${auctionId}`);
  if (!auctionResponse.ok) throw new Error("Failed to load auction");

  const auction = await auctionResponse.json();

  const bidsResponse = await fetch(`${BASE_URL}/auctions/${auctionId}/bids`);
  if (!bidsResponse.ok) throw new Error("Failed to load bids");

  const bids = await bidsResponse.json();

  // Calculate current bid and number of bidders
  const currentBid = bids.length > 0
    ? Math.max(...bids.map(bid => bid.price))
    : auction.startPrice;

  const bidders = [...new Set(bids.map(bid => bid.bidderId))].length;

  return {
    ...auction,
    currentBid,
    bidders,
  };
};

// Bid on an auction
export const placeBid = async (auctionId, bidAmount) => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Authentication required');
  }

  try {
    const response = await fetch(`${BASE_URL}/auctions/${auctionId}/bids`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ price: bidAmount }),
    });

    if (!response.ok) {
      let errorMessage = 'Failed to place bid';
      try {
        const errorData = await response.json();
        errorMessage = errorData.message || errorMessage;
      } catch (e) {
        // If response isn't JSON, use status text
        errorMessage = response.statusText || errorMessage;
      }
      throw new Error(errorMessage);
    }

    return await response.json();
  } catch (error) {
    console.error('Bid placement error:', error);
    throw error;
  }
};

export const GetAllBidsForAuction = async (auctionId) => {
   try {
        const response = await fetch(`${BASE_URL}/auctions/${auctionId}/bids`);
        if (!response.ok) {
            
            const errorData = await response.json();
            throw new Error(errorData.message || "Request failed");
        }
        return await response.json();
    } catch (error) {
        console.error("Fetch error:", error.message);
        throw error; 
    }
};


export const registerUser = async (userData) => {
  const response = await fetch(`${BASE_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Registration failed');
  }

  return await response.json(); 
};

export const loginUser = async (loginData) => {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Login failed');
  }

  const token = await response.text();
  return token;
};


