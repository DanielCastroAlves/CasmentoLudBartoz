import React from "react";
import text from "../../Assets/text.json";
import { useLanguage } from "../../hooks/useLanguage";
import { Stack } from "@mui/material";
import rio from "../../Assets/Images/Picture-RJ.png";
import rioMb from "../../Assets/Images/cardImage/IMG=Mobile.png";

import { FirstSection } from "../../Components/FirstSection";
import IMG_2905 from "../../Assets/Images/hoteis/IMG_2905.png";
import ipanemaHotel from "../../Assets/Images/hoteis/ipanemaHotel.png";
import { Description, BannerImage, BannerImageBuzios, ContainerBanner, ContainerPageCity, ContainerTitleBanner, TituloDescription } from "./style";
import { BreadCrumb } from "../../Components/BreadCrumb";

const RioDeJaneiro = () => {
    const { language } = useLanguage();
    const hoteis = [
        { nome: "hotel", imagem: IMG_2905 },
        { nome: "hotel ipanema", imagem: ipanemaHotel },
    ];

    const data = [
        { label: text.MenuHeaderLinks.home[language], url: "/home" },
        { label: text.MenuHeaderLinks.travel[language], url: "/travel" },
        { label: "Rio de Janeiro", url: "travel/rio-de-janeiro" },
    ];

    return (
        <Stack width="100%" height="100%" mb={10}>
            <BreadCrumb data={data} />
            <FirstSection title={text.Wedding.title[language]} subtitle={text.Wedding.subTitle[language]} paragraph1={text.Wedding.introP1[language]} paragraph2={text.Wedding.introP2[language]} />
            <BannerImage>
                <div className="imgBuzios">
                    <img src={rio} alt="buzios" style={{ width: "100%" }} />
                </div>
                <div className="imgBuziosMb">
                    <img src={rioMb} alt="buzios" style={{ maxWidth: "100%" }} />
                </div>
            </BannerImage>

            <ContainerPageCity>
                <TituloDescription>Lorem ipsum</TituloDescription>
                <Description>
                    At ultricies scelerisque consequat sed vestibulum. Vel hac aliquet mollis suspendisse auctor ut. Urna volutpat enim in vitae cursus pellentesque consectetur lacus habitant. In faucibus massa augue pretium pellentesque tincidunt. Dolor
                    fringilla vivamus ullamcorper pellentesque blandit integer. Sed massa turpis proin nulla quam id. Etiam amet massa vulputate pretium sed. Lectus fames quam purus vulputate. Urna lectus ut sed posuere amet mauris semper tempus. Feugiat nunc
                    netus nisl iaculis ultrices netus. Varius volutpat facilisis vel nisi nisl sapien egestas a pharetra. Volutpat malesuada viverra nisi adipiscing.
                </Description>
                <Description> Quisque cras turpis proin nunc enim. Tellus odio tellus quam sit maecenas pellentesque consequat.</Description>
                <Description>
                    <ul>
                        <li>Sed</li>
                        <li>consectetur</li>
                        <li>sapien</li>
                        <li>sed</li>
                        <li>amet</li>
                        <li>dolor</li>
                    </ul>
                </Description>
                <Description>
                    Orci sapien arcu lectus sed. In id porttitor interdum montes. Euismod maecenas eu amet consectetur in sed eget id risus. Nibh eu risus ornare viverra velit viverra purus. At tincidunt pulvinar elementum arcu maecenas tincidunt.
                </Description>
            </ContainerPageCity>
            <ContainerPageCity>
                <TituloDescription>Lorem ipsum</TituloDescription>
                <Description>
                    Sed sed pellentesque volutpat nisl varius curabitur vulputate neque. Pellentesque duis magna nisl odio posuere neque facilisi quisque faucibus. Libero id sed tristique sit eget tellus. Viverra egestas neque diam quis consectetur mauris nunc
                    et semper. Sed morbi enim auctor vestibulum sagittis ornare placerat. Et at nisl rhoncus ut duis nec habitasse viverra sit. Cursus nam nullam urna in faucibus et varius parturient. Ullamcorper volutpat duis in sagittis. Cursus est habitant
                    venenatis porta odio vel justo consequat. Proin nibh varius sagittis egestas. Integer posuere nibh id ac odio. Eleifend facilisis consectetur velit volutpat diam. Scelerisque phasellus et tristique id mi vitae. Et et sed diam arcu tristique
                    est pellentesque eu sed.
                </Description>

                <Description>Gravida risus nunc amet sapien risus diam. Semper lorem natoque suscipit sem.</Description>
            </ContainerPageCity>

            <ContainerBanner>
                {hoteis.map((hotel, index) => (
                    <BannerImageBuzios
                        style={{
                            position: "relative",
                            backgroundImage: `url(${hotel.imagem})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                backgroundColor: "rgba(211, 211, 211, 0.5)",
                            }}
                        >
                            <ContainerTitleBanner>
                                <h1>{hotel.nome}</h1>
                                <p>Conheça o hotel</p>
                            </ContainerTitleBanner>
                        </div>
                    </BannerImageBuzios>
                ))}
            </ContainerBanner>
        </Stack>
    );
};

export default RioDeJaneiro;
