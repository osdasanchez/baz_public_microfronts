import * as React from "react";
import qr_img from '../../../assets/images/qr_picture.svg?url'
import google_play from "../../../assets/images/google-play.png";
import apple_store from "../../../assets/images/apple_store.png";
import { StoresContainer } from "./stores.styles";

const Stores = () => (
  <StoresContainer>
    <div className="qr-container">
        <img src={qr_img} alt="logo" />
    </div>

    <div className="stores">
      <span className="item-store">Escanea el código con tu celular </span>
      <img src={google_play} className="logo_store" alt="logo" />
      <img src={apple_store} className="logo_store" alt="logo" />
    </div>
  </StoresContainer>
);

export default Stores;
