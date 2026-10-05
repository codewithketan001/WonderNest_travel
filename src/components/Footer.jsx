import React from "react";
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {year} WanderNest Travels</p>
        <p>Explore More. Experience More.</p>
      </div>
    </footer>
  );
}

export default Footer;