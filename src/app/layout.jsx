import Navbar from '@/components/Navbar';
import './Styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Navbar />
        {children}
        <script src="https://kit.fontawesome.com/9fec1c2b51.js" crossOrigin="anonymous"></script>
      </body>
    </html>
  );
}
