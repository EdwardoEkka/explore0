import React from 'react';

function Footer() {
  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} Wardo</p>
    </footer>
  );
}

const footerStyle = {
  backgroundColor:'#1e4d2b',
  color: '#fff',
  textAlign: 'center',
  padding: '1rem',
};

export default Footer;
