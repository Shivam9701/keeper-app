import React from "react";
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footeer">
      <p> {year} </p>
    </footer>
  );
}
export default Footer;
