import { useState } from 'react';
import './Karakter.css';

import bg from '../assets/karakter/bg-karakter.png';
import logokar from '../assets/karakter/logo-karakter.png';
import papanchar1 from '../assets/karakter/papan-char.png';
import papanchar2 from '../assets/karakter/papan-char.png';
import papanchar3 from '../assets/karakter/papan-char.png';
import papanchar4 from '../assets/karakter/papan-char.png';
import papannama from '../assets/karakter/papan-nama.png';
import grimleaf from '../assets/karakter/grimleaf.png';
import mosslyn from '../assets/karakter/mosslyn.png';
import stonzel from '../assets/karakter/stonzel.png';
import sylphern from '../assets/karakter/sylphern.png';
import grim from '../assets/karakter/Grim.png';
import moss from '../assets/karakter/Moss.png';
import stone from '../assets/karakter/Ston.png';
import syl from '../assets/karakter/Sylp.png';

function Karakter() {
  const [selectedChar, setSelectedChar] = useState(null);

  const karakterData = {
    char1: {
      nama: 'Grimleaf',
      deskripsi: 'Ahli pedang dengan kekuatan tinggi.',
      gambar: grimleaf,
    },
    char2: {
      nama: 'Stonzel',
      deskripsi: 'Pemanah cepat dengan akurasi tinggi.',
      gambar: stonzel,
    },
    char3: {
      nama: 'Sylphern',
      deskripsi: 'Penyihir dengan kemampuan sihir es.',
      gambar: sylphern,
    },
    char4: {
      nama: 'Mosslyn',
      deskripsi: 'Petarung jarak dekat yang tangguh.',
      gambar: mosslyn,
    },
  };

  const handlePopupOpen = (charKey) => {
    setSelectedChar(charKey);
  };

  const handlePopupClose = () => {
    setSelectedChar(null);
  };

  return (
    <div>
      <div className="karakter-page">
        <div className="karakter-content">
          <img src={logokar} alt="Logo" className="logo-karakter" />
        </div>
        <img src={bg} alt="Background" className="karakter-bg" />

        {/* Gambar Karakter */}
        <img src={papanchar1} alt="Karakter A" className="papan-karakter1" onClick={() => handlePopupOpen('char1')} />
        <img src={papanchar2} alt="Karakter B" className="papan-karakter2" onClick={() => handlePopupOpen('char2')} />
        <img src={papanchar3} alt="Karakter C" className="papan-karakter3" onClick={() => handlePopupOpen('char3')} />
        <img src={papanchar4} alt="Karakter D" className="papan-karakter4" onClick={() => handlePopupOpen('char4')} />

        {/* Papan Nama */}
        <img src={papannama} alt="Papan Nama" className="papan-nama1" onClick={() => handlePopupOpen('char1')} />
        <img src={papannama} alt="Papan Nama" className="papan-nama2" onClick={() => handlePopupOpen('char2')} />
        <img src={papannama} alt="Papan Nama" className="papan-nama3" onClick={() => handlePopupOpen('char3')} />
        <img src={papannama} alt="Papan Nama" className="papan-nama4" onClick={() => handlePopupOpen('char4')} />
      </div>

      {/* Karakter Gambar Dekoratif */}
      <div>
        <img src={grimleaf} alt="grimleaf" className="grimleaf" onClick={() => handlePopupOpen('char1')} />
        <img src={stonzel} alt="stonzel" className="stonzel" onClick={() => handlePopupOpen('char2')} />
        <img src={sylphern} alt="sylphern" className="sylphern" onClick={() => handlePopupOpen('char3')} />
        <img src={mosslyn} alt="mosslyn" className="mosslyn" onClick={() => handlePopupOpen('char4')} />
      </div>

      {/* Nama Karakter Gambar */}
      <div>
        <img src={grim} alt="nama 1" className="nama1" onClick={() => handlePopupOpen('char1')} />
        <img src={stone} alt="nama 2" className="nama2" onClick={() => handlePopupOpen('char2')} />
        <img src={syl} alt="nama 3" className="nama3" onClick={() => handlePopupOpen('char3')} />
        <img src={moss} alt="nama 4" className="nama4" onClick={() => handlePopupOpen('char4')} />
      </div>

      {/* Popup Info */}
      {selectedChar && (
  <div className="popup-overlay" onClick={handlePopupClose}>
    <div className="popup-box" onClick={(e) => e.stopPropagation()}>
      <div className="popup-left">
        <div className="frame-border">
          <img
            src={karakterData[selectedChar].gambar}
            alt={karakterData[selectedChar].nama}
            className="popup-char-img"
          />
        </div>
      </div>
      <div className="popup-right">
        <div className="parchment">
          <p className="char-desc">{karakterData[selectedChar].deskripsi}</p>
          <p className="char-footer">—The Forest Warden of Decay 🌿💀</p>
        </div>
        <button className="popup-close" onClick={handlePopupClose}>✕</button>
      </div>
    </div>
  </div>
)}

    </div>
  );
}

export default Karakter;
