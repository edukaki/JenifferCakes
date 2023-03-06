import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import PropTypes from 'prop-types';

import './Styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Navbar />
        {children}
        <Footer />
        <script
          src="https://kit.fontawesome.com/9fec1c2b51.js"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
