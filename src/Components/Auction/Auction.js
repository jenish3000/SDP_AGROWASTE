// import React, { useState, useEffect } from 'react';
// import socketIOClient from 'socket.io-client';

// const ENDPOINT = 'http://localhost:5000';

// function Auction() {
//   const [auctions, setAuctions] = useState([]);
//   const [newBid, setNewBid] = useState({ itemId: '', bid: 0 });
//   const [newComment, setNewComment] = useState({ itemId: '', username: '', comment: '' });

//   useEffect(() => {
//     const socket = socketIOClient(ENDPOINT);
//     socket.on('auctions', (data) => {
//       setAuctions(data);
//     });
//     return () => socket.disconnect();
//   }, []);

//   const handleBidChange = (event) => {
//     setNewBid({ ...newBid, [event.target.name]: event.target.value });
//   };

//   const handleCommentChange = (event) => {
//     setNewComment({ ...newComment, [event.target.name]: event.target.value });
//   };

//   const handleBidSubmit = (event) => {
//     event.preventDefault();
//     const socket = socketIOClient(ENDPOINT);
//     socket.emit('newBid', newBid);
//     setNewBid({ itemId: '', bid: 0 });
//   };

//   const handleCommentSubmit = (event) => {
//     event.preventDefault();
//     const socket = socketIOClient(ENDPOINT);
//     socket.emit('newComment', newComment);
//     setNewComment({ itemId: '', username: '', comment: '' });
//   };
//   console.log(auctions);
//   return (
//     <div>
//       {auctions.map((auction) => (
//         <div key={auction._id}>
//           <h2>{auction.name}</h2>
//           <p>{auction.description}</p>
//           <p>Current bid: {auction.currentBid}</p>
//           <form onSubmit={handleBidSubmit}>
//             <label htmlFor="bid">Bid:</label>
//             <input type="number" id="bid" name="bid" value={newBid.bid} onChange={handleBidChange} />
//             <button type="submit">Submit bid</button>
//           </form>
//           <form onSubmit={handleCommentSubmit}>
//             <label htmlFor="comment">Comment:</label>
//             <input type="text" id="comment" name="comment" value={newComment.comment} onChange={handleCommentChange} />
//             <label htmlFor="username">Username:</label>
//             <input type="text" id="username" name="username" value={newComment.username} onChange={handleCommentChange} />
//             <button type="submit">Submit comment</button>
//           </form>
//           <hr />
//           {auction.comments.map((comment, index) => (
//             <div key={index}>
//               <p>{comment.username}: {comment.comment}</p>
//             </div>
//           ))}
//         </div>
//       ))}
//       <form onSubmit={handleBidSubmit}>
//             <label htmlFor="bid">Bid:</label>
//             <input type="number" id="bid" name="bid" value={newBid.bid} onChange={handleBidChange} />
//             <button type="submit">Submit bid</button>
//           </form>
//     </div>
//   );
// }

// export default Auction;


import React, { useState } from 'react';
import io from 'socket.io-client';
import AuctionList from './AuctionList';

const socket = io('http://localhost:3001');

function Auction({ username }) {
  const [amount, setAmount] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    socket.emit('bid', { username, amount });
    setAmount('');
  };

  return (
    <>
    <AuctionList/>
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
      />
      <button type="submit">Submit Bid</button>
    </form>
    </>
  );
}

export default Auction;