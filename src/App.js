import Footer from "./components/Footer";
import Header from "./components/Header";
import Body from "./components/Body";
import Image from './images/bg_image_hcmute.png';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
// import BgImage from "./components/BgImage";
function App() {
    const backgroundStyle = {
      backgroundImage: `url(${Image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: -1, // Send the background to the back
    };

  const contentStyle = {
      position: 'relative',
      zIndex: 1, // Place content above the background
      padding: '20px',
      minHeight: '100vh', // Ensure content takes full viewport height
      overflowY: 'auto',  // Allow content to scroll
  };

  return (
    <div className="App">
        <div style={backgroundStyle}></div>
        <div style={contentStyle}>
          <Header />
          <Body></Body>
          <Footer />
        </div>
    </div>
  );
}

export default App;
