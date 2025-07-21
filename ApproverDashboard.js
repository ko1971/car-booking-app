
import React from 'react';

function ApproverDashboard() {
  return (
    <div>
      <h2>Approver Dashboard</h2>
      <p>Pending requests for approval</p>
      <ul>
        <li>Request #1 - <button>Approve</button> <button>Reject</button></li>
        <li>Request #2 - <button>Approve</button> <button>Reject</button></li>
      </ul>
    </div>
  );
}

export default ApproverDashboard;
