import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001');

function AuctionList() {
  const [bids, setBids] = useState([]);

  useEffect(() => {
    socket.on('bid', (data) => {
      setBids((bids) => [...bids, data]);
    });
    
    return () => {
        socket.off('bid');
      };
  }, []);

  return (
    <div>
      <h2>Bids:</h2>
      <ul>
        {bids.map((bid) => (
          <li style = {{listStyle:"none"}}key={bid.id}>
            {bid.username} bid {bid.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AuctionList;