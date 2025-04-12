import './Karakter.css';
import bg from '../assets/karakter/bg-karakter.png';
import logokar from '../assets/karakter/logo-karakter.png';

function Karakter() {
  return (
    <div className="karakter-page">
      <div className="konten-utama">
        <img src={logokar} alt="Logo" className="karakter-logo" />
      </div>
      <img src={bg} alt="Background" className="karakter-bg" />
    </div>
  );
}

export default Karakter;
