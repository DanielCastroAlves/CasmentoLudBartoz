import React, { useState } from "react";
import text from "../../Assets/text.json";
import { useLanguage } from "../../hooks/useLanguage";
import { Stack } from "@mui/material";
import buzios from "../../Assets/Images/Picture-Buzios.png";
import buziosMb from "../../Assets/Images/cardImage/Picture Buzios mobile.png";
import alforria from "../../Assets/Images/hoteis/Alforria.png";
import blueMarlin from "../../Assets/Images/hoteis/blueMarlin.png";
import Sable from "../../Assets/Images/hoteis/Sable.png";
import { Link } from "@mui/material";
import {
  BannerImage,
  CardBanner,
  ContainerBanner,
  ContainerPageCity,
  ContainerTitleBanner,
  Description,
  TituloDescription,
} from "./style";
import { BannerImageBuzios } from "../Buzios/style";
import { FirstSection } from "../../Components/FirstSection";
import { BreadCrumb } from "../../Components/BreadCrumb";
import { ButtonNavigation } from "../../Components/ButtonNavigation";

const Buzios = () => {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelection = () => {
    setIsSelected(!isSelected);
  };
  const hoteis = [
    {
      nome: "Alforria",
      destination: "http://pousadaalforria.com.br/",
      imagem: alforria,
    },
    {
      nome: "Blue Marlin",
      destination: "https://www.bluemarlinbuzios.com.br/",
      imagem: blueMarlin,
    },
    {
      nome: "Sable D'Or",
      destination: "https://www.pousadasabledor.com.br/",
      imagem: Sable,
    },
  ];
  const { language } = useLanguage();

  const data = [
    { label: text.MenuHeaderLinks.home[language], url: "/home" },
    { label: text.MenuHeaderLinks.travel[language], url: "/travel" },
    { label: "Búzios", url: "travel/buzios" },
  ];

  const path = [
    {
      label: text.MenuHeaderLinks.travel[language],
      url: "/travel",
    },
    { label: text.MenuHeaderLinks.rioDeJaneiro[language], url: "/travel/rio-de-janeiro" },
  ];

  return (
    <Stack width="100%" height="100%" mb={10}>
      <BreadCrumb data={data} />
      <FirstSection
        title={text.Búzios.titleP1[language]}
        subtitle={text.Búzios.subTitle[language]}
        paragraph1={text.Búzios.introP1[language]}
        paragraph2={text.Búzios.introP2[language]}
      />
      <BannerImage>
        <div className="imgBuzios">
          <img src={buzios} alt="buzios" style={{ width: "100%" }} />
        </div>
        <div className="imgBuziosMb">
          <img src={buziosMb} alt="buzios" style={{ maxWidth: "100%" }} />
        </div>
      </BannerImage>

      <ContainerPageCity>
        <TituloDescription>{text.Búzios.heading1[language]}</TituloDescription>
        <Description>{text.Búzios.body1[language]}</Description>
        <Description>{text.Búzios.body2[language]}</Description>
        <Description>
          <ul>
            <li>{text.Búzios.destinosBuzios.d1[language]}</li>
            <li>{text.Búzios.destinosBuzios.d2[language]}</li>
            <li>{text.Búzios.destinosBuzios.d3[language]}</li>
            <li>{text.Búzios.destinosBuzios.d4[language]}</li>
            <li>{text.Búzios.destinosBuzios.d5[language]}</li>
            <li>{text.Búzios.destinosBuzios.d6[language]}</li>
          </ul>
        </Description>

        <Description
          dangerouslySetInnerHTML={{
            __html: text.Búzios.body3[language],
          }}
        />
      </ContainerPageCity>
      <ContainerPageCity>
        <TituloDescription>{text.Búzios.heading2[language]}</TituloDescription>
        <Description>{text.Búzios.bodyBuzius1[language]}</Description>
        <Description
          dangerouslySetInnerHTML={{
            __html: text.Búzios.bodyBuzius2[language],
          }}
        />
      </ContainerPageCity>

      <ContainerBanner>
        {hoteis.map((hotel, index) => (
          <Link href={hotel.destination} underline="none" target="blank">
            <CardBanner isSelected={isSelected} onClick={toggleSelection}>
              <BannerImageBuzios
                style={{
                  position: "relative",
                  backgroundImage: `url(${hotel.imagem})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              />
              <ContainerTitleBanner>
                <h1>{hotel.nome}</h1>
                <p>Conheça o hotel</p>
              </ContainerTitleBanner>
            </CardBanner>
          </Link>
        ))}
      </ContainerBanner>
      <ButtonNavigation path={path} />
    </Stack>
  );
};

export default Buzios;
