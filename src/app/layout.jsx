import Navbar from '@/components/Navbar';
import './Styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
