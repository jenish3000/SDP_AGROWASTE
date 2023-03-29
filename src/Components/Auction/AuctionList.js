import React, { useEffect, useState } from 'react';
// const socket = io('http://localhost:3001');

function AuctionList(props) {

  const [newArr , setnewArr] = useState([]);
  const {bids} = props;
  // bids.reverse();
    useEffect(()=>{
      // const x  = bids;
      // x.reverse();
      // setnewArr([...x.slice(0,3)])
      let x = bids;
      console.log("new bids " ,x.reverse());
    },[]);
  // const [bids, setBids] = useState([]);

  // useEffect(() => {
  //   socket.on('recieve_bid', (data) => {
  //     console.log("hello this is bids from auctionlist " ,data);
  //     setBids((bids) => [...bids, data]);
  //   });
  //   console.log("Hello from inside llist")
  //   return () => {
  //       socket.off('bid');
  //     };
  // }, [socket]);

  return (
    <div>
      <h2>Bids:</h2>
      <ul>
        {bids.map((bid,idx) => (
          <>{1&&
          <li style = {{listStyle:"none"}}key={idx}>
            {bid.Bid} bid 
            {/* {bid.id} ==== {bid.User} */}
          </li>}
          </>
        ))}
      </ul>
    </div>
  );
}

export default AuctionList;
