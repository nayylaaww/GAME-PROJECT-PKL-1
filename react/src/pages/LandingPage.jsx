import 'react';
import './LandingPage.css'; 
import gunung from "../assets/gunung.png";
import logo from "../assets/logo.png";

function LandingPage() {
  return (

    <div className="background">
      <div className="konten-utama">
        <img src={logo} alt="Logo" className="logo-judul" />
        
      </div>

      <img src={gunung} alt="Gunung" className="gambar-gunung" />
    </div>


  );
}

export default LandingPage;
