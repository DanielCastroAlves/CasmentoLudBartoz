import React from "react";
import { ContainerCardGift } from "./style";
import codeBartoz from "../../image/Frame 187 (1).png";
import codeLud from "../../image/Frame 187.png";
import codeLudBartoz from "../../image/QR Code.png";

export const CardGifts = ({ title, describe, id, grupo }) => {
  return (
    <ContainerCardGift>
      <div className="container-text">
        <div className="title">
          {" "}
          <h1>{title}</h1>
        </div>
        <div className="describe">
          {" "}
          <p>{describe}</p>
        </div>
        <div className="grupo">
          {" "}
          <p>{grupo}</p>
        </div>
      </div>

      {id === 1 || id === 4 ? (
        <div className="container-qrcode">
          <img src={codeLudBartoz} alt={""} />
        </div>
      ) : null}
      {id === 2 ? (
        <div className="container-qrcode">
          <img src={codeBartoz} alt={""} />
        </div>
      ) : null}
      {id === 3 ? (
        <div className="container-qrcode">
          <img src={codeLud} alt={""} />
        </div>
      ) : null}
    </ContainerCardGift>
  );
};
