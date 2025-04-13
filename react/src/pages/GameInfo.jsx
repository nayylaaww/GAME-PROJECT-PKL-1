import 'react';
import "./Gameinfo.css";
import bg from "../assets/bg-gameinfo.png";
import logo from "../assets/logo-gi.png";
import gulungan from "../assets/gulungan-kertas.png";

function GameInfo() {
  return (

    <div className="page-gameinfo">
      <div className="konten-utama">
        <img src={logo} alt="Logo" className="logo-gameinfo" />
      </div>
      <img src={bg} alt="bg" className="gameinfo-background" />
      <img src={gulungan} alt="gulungan" className="gulungan-kertas" />
      <div className="gulungan-text">
        <b>
    Selamat datang di dunia hijau yang penuh petualangan! <br />
    <strong>VreDevol</strong> adalah game platformer seru dengan suasana <br />
    alam yang sejuk dan damai. Kendalikan karakter unik <br />
    berbentuk makhluk lucu yang memiliki kekuatan spesial. <br />
    Melompat, berlari, dan lawan berbagai tantangan untuk <br />
    mencapai level tertinggi. </b>
  </div>
    </div>
  )
}

export default GameInfo;
