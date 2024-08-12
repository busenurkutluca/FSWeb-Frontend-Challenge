import React from "react";
const links = [
    { href: 'https://personalblog.com', label: 'Personal Blog' },
    { href: 'https://github.com/busenurkutluca', label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/busenur-kutluca/', label: 'Linkedin' }
  ];
  
  const Footer = () => {
    return (
<>
        <div className="footer-acıklama">
        <h2>Let’s work together on your next product.</h2>
        <h3>busenurkutuca@gmail.com</h3>
        </div>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__links">
            {links.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
      </>
    );
  };
  
  export default Footer;