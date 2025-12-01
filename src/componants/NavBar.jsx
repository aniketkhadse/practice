import React from "react";

function NavBar() {
  return (
    <div>
      {/* Navbar */}
      <div className="bg-gray-200 flex justify-between  ">
        <div className="logo">logo</div>
        <div className="right flex gap-2 px-1.5">
          <div className="home">home</div>
          <div className="about">about</div>
          <div className="contact">contact</div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
