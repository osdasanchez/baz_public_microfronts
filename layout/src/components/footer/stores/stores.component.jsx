import React from "react";
// import baz_qr from "../../../assets/images/qr-superapp-2-2-x.png";
import qr_image from "../../../assets/images/qr_picture.svg";
import google_play from "../../../assets/images/google-play.svg?url";
import apple_store from "../../../assets/images/group-2-copy-2.svg?url";
import { StoresContainer } from "./stores.styles";

const Stores = () => (
  <StoresContainer>
    <div className="qr-container">
      <img src={qr_image} className="logo_qr" alt="logo" />
    </div>

    <div className="stores">
      <span className="item-store">Escanea el código con tu celular </span>
      <img src={google_play} className="logo_store" alt="logo" />
      <img src={apple_store} className="logo_store" alt="logo" />
    </div>
  </StoresContainer>
);

export default Stores;
