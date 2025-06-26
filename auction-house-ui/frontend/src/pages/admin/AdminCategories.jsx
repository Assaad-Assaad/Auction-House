import React from 'react';
import { isAdmin } from '../../services/auth';

function AdminCategories() {
  if (!isAdmin()) {
    return <p>You do not have permission to view this page.</p>;
  }

  return (
    <div>
      <h2>Admin Categories</h2>
      <p>Manage categories here.</p>
    </div>
  );
}

export default AdminCategories;