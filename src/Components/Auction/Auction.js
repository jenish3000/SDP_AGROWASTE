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


import React, { useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';
import AuctionList from './AuctionList';
import {nanoid} from 'nanoid';
import DeepContext from '../../context/DeepContext';

const socket = io('http://localhost:3001');

function Auction(props) {
  // const {user} = props;
  // console.log("heorweoroew ", props);
  // localStorage.setItem('username',username);
  const [price, setprice] = useState(0);
  const [amount, setAmount] = useState('');
  const [Code,setCode] = useState('');
  const [bids,setbids] = useState([]);
  const [h,setH] = useState([]);
  const [Start,setStart] = useState(0);
  const {user,setUser}=useContext(DeepContext);
  const [Hig,setHig] = useState(0);
  const handleSubmit = (event) => {
    event.preventDefault();
    // setUser("qq");
    console.log("hii i am msg",user);
    // console.log(price,amount);
    if(Hig < amount){ 
      setprice(amount);
      // console.log(price);
      socket.emit('send_bid', { bid : amount,Code,user});
      socket.on("error_bid",(data)=>{
        console.log("Hello from inside");
        alert("Invalid bid for User");
      })
    }
    else{
      alert("Please Enter valid bid");
    }
    setAmount('');
  };

  const SubmitCode = (event) => {
    event.preventDefault();
    socket.emit('join room',{Code : Code});
    socket.on("room_error",(data)=>{
      alert("can not find room with this id");
    })
    socket.on("starting_bid",(data)=>{
      console.log("data is here",data);
      setStart(data);
    })
    socket.on("curr_bid",(data)=>{
      setHig(data);
    })
    socket.on("bids",(data)=>{
      console.log("kya mast mossam hai",[...data]);
      setbids((bids)=>{
        if(bids&&!bids.includes(data)){
          setbids([...bids,...data]);
        }
      })
        
    })
    
  }
  useEffect(() => {
    socket.on("receive_bid",(data)=>{
      console.log(data);
      setH((h)=>[...h,data]);
      console.log(h);
      setbids((bids)=>{
        if(bids&&!bids.includes(data)){
          setbids([...bids,data]);
        }
      })
    

      socket.on("curr_bid",(data)=>{
        setHig(data);
      })

    });
    console.log(user);
    
  }, [socket])
  
  return (
    <>
    <form onSubmit={SubmitCode}>
    <input
        type="number"
        value={Code}
        onChange={(event) => setCode(event.target.value)}
      />
      <button type="submit">Submit</button> 
    </form>
    <p>---------------</p>
    <p>Starting Bid is : {Start} || Current Highest Bid : {Hig}</p>
    <AuctionList bids = {bids}/>
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

export default Auction;