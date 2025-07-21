
import React from 'react';

function RequesterDashboard() {
  return (
    <div>
      <h2>Requester Dashboard</h2>
      <form>
        <label>Vehicle Type:</label>
        <select>
          <option>Sedan</option>
          <option>Van</option>
          <option>SUV</option>
        </select>
        <br />
        <label>Date:</label>
        <input type="date" />
        <br />
        <label>Time:</label>
        <input type="time" />
        <br />
        <label>From:</label>
        <input type="text" />
        <br />
        <label>To:</label>
        <input type="text" />
        <br />
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
}

export default RequesterDashboard;
