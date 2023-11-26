import "../app/globals.css";
import Navbar from "../components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/globals.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from "../components/Footer";
import { Inter, Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight:'400' })

function MyApp({ Component, pageProps }) {
  return (
    <div className={poppins.className}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
