import React from 'react'

function showMore() {
    document.getElementById("more-info").classList.remove("d-none");
    document.querySelector("button.btn-primary").style.display = "none";
  }
const Aboutus = () => {
  return (
    <>
  
    <div className="container">
      <h1>About Us</h1>
      <div className="row">
        <div className="col-md-6">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, urna id malesuada commodo, nibh risus ornare magna, vitae pharetra ipsum risus id augue. </p>
        </div>
        <div className="col-md-6">
          <p>Sed auctor, urna id malesuada commodo, nibh risus ornare magna, vitae pharetra ipsum risus id augue. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus cumque debitis ipsum fuga vel saepe recusandae nobis necessitatibus eum delectus alias nihil nostrum aliquam eius voluptatum doloribus odit, aspernatur incidunt voluptate est! Blanditiis totam nesciunt placeat voluptatum saepe, corporis eligendi? </p>
        </div>
      </div>
      <button className="btn btn-primary" onClick={showMore}>Show More</button>
      <div id="more-info" className="d-none">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, urna id malesuada commodo, nibh risus ornare magna, vitae pharetra ipsum risus id augue.</p>
      </div>
    </div>
    </>
  )
}

export default Aboutus