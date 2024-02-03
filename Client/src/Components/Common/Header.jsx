import React from "react";
import { Image } from "react-bootstrap";
import image from "../../Assets/Header.png";

function Header() {
  return (
    <header>
      <div className="logo "style={{ width: '1124px' }}>
        <Image className="rounded-4 border-success pt-2" src={image} />
      </div>
    </header>
  );
}

export default Header;
