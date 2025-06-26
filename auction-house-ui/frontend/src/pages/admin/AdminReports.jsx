import React from 'react';
import { isAdmin } from '../../services/auth';

function AdminReports() {
  if (!isAdmin()) {
    return <p>You do not have permission to view this page.</p>;
  }

  return (
    <div>
      <h2>Admin Reports</h2>
      <p>View reports here.</p>
    </div>
  );
}

export default AdminReports;