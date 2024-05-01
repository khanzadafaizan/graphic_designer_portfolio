import React from "react";
import { Link } from "react-router-dom";
const SocialIcons = () => {
  const whatsappNumber = "+923160387855";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  return (
    <div className="justify-content-center d-flex gap-2">
      <Link
        to={"https://www.facebook.com/Safiyasbeauty?mibextid=ZbWKwL"}
        target="blank"
      >
        <i className="fab fa-facebook-f fs-4 hover-icon"></i>
      </Link>
      <Link
        to={
          "https://www.instagram.com/amaankhanzada_official?igsh=MTNmZ2JhZGZ1aHVydg=="
        }
        target="blank"
      >
        <i className="fab fa-instagram fs-4 hover-icon"></i>
      </Link>

      <Link to={"https://www.linkedin.com/in/amaankhanzada98"} target="blank">
        <i className="fab fa-linkedin fs-4 hover-icon"></i>
      </Link>
      <Link to={whatsappLink} target="blank" rel="noopener noreferrer">
        {" "}
        <i className="fab fa-whatsapp fs-4 hover-icon"></i>
      </Link>
      <Link to={"https://www.behance.net/amaankhanzada"} target="blank">
        <i className="fab fa-behance fs-4 hover-icon"></i>
      </Link>
    </div>
  );
};

export default SocialIcons;
