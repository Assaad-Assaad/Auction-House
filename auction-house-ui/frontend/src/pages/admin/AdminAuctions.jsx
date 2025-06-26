import React from 'react';
import { isAdmin } from '../../services/auth.js'

function AdminAuctions() {
  if (!isAdmin()) {
    return <p>You do not have permission to view this page.</p>;
  }

  return (
    <div className="admin-auctions">
      <h2>Admin Panel</h2>
      <p>Welcome! You can manage auctions here.</p>

      <div className="admin-actions">
        <button>Create Auction</button>
        <button>Edit Auction</button>
        <button>Delete Auction</button>
      </div>
    </div>
  );
}

export default AdminAuctions;