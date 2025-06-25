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


