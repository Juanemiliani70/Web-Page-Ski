import React from "react";

const Header = ({ title }) => {
  return (
    <div className="mb-4 text-center">
      <h2 className="hotel-color fw-bold">{title}</h2>
      <hr style={{ width: "60px", borderTop: "3px solid #007bff", margin: "0 auto" }} />
    </div>
  );
};

export default Header;
