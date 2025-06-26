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

// Bid on an auction
export const placeBid = async (auctionId, bidData) => {
  const response = await fetch(`${BASE_URL}/auctions/${auctionId}/bids`, {
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


