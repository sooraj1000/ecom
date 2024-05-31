import React from 'react';

function Home() {
  return (
    <div style={{display:"flex"}}>
      <div style={{backgroundColor:"transperent",height:"300px",width:"40%"}}>

        <h1 style={{color:"blue"}}>
          WELCOME TO OUR HOME PAGE
        </h1>

      </div>
      <div style={{backgroundImage:"url(https://i.pinimg.com/originals/51/6a/dd/516add894c6ec82132725abea44f1d23.jpg)",backgroundSize:"cover",height:"500px",width:"60%"}}>

   </div>
    
    </div>
    // <div style={{backgroundImage:"url(https://slideuplift.com/wp-content/uploads/edd/2021/02/welcome-slide-21-28.jpg)",backgroundSize:"cover",height:"500px",width:"50%"}}>

    //   <h1>Home Page</h1>
    // </div>
    
  );
}

export default Home