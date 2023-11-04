import { Stack, useTheme } from "@mui/material";
import text from "../../Assets/text.json";
import { useLanguage } from "../../hooks/useLanguage";
import { LocationAndWeather } from "./components/LocationAndWeather";
import { FirstSection } from "../../Components/FirstSection";
import CarouselWedding from "./components/Carousel";
import DressCodeImage from "../../Assets/Images/cardImage/DressCode.svg";
import PreWeddingImage from "../../Assets/Images/cardImage/PreWedding.svg";
import teambrideGroom from "../../Assets/Images/cardImage/teambrideGroom.png";

import PresenteImage from "../../Assets/Images/cardImage/Presente.svg";
import historiacard from "../../Assets/Images/cardImage/historiacard.png";
import { useLocation } from "react-router-dom";

export const Wedding = () => {
    const theme = useTheme();
    const { language } = useLanguage();

    const dataWedding = [
        {
            destination: "/wedding/prewedding",
            image: PreWeddingImage,
            title: "Pre Wedding",
            description: "Vamos ver o pôr-do-sol mais bonito da cidade juntos?",
        },
        {
            destination: "/wedding/dresscode",
            image: DressCodeImage,
            title: "Dress Code",
            description: "Com que roupa eu vou?",
        },
        {
            destination: "/wedding/gifts",
            image: PresenteImage,
            title: "Wedding Gift",
            description: "THINGS YOU SHOULD KNOW BEFORE GIFTING THE BRIDE AND GROOM",
        },
        {
            destination: "/wedding/ourstory",
            image: historiacard,
            title: "Our Love Story",
            description: "Our wedding party",
        },
        {
            destination: "/wedding/teamBG",
            image: teambrideGroom,
            title: "Team Bride & Groom",
            description: "Our wedding party",
        },
    ];
    return (
        <Stack width="100%" height="100%" mb={10}>
            <FirstSection
                title={language === "en" ? "Ludmilla & Bartosz's" : text.MenuHeaderLinks.wedding[language]}
                title2={language === "en" ? text.MenuHeaderLinks.wedding[language] : "Ludmilla & Bartosz"}
                subtitle={text.Wedding.subTitle[language]}
                paragraph1={text.Wedding.introP1[language]}
                paragraph2={text.Wedding.introP2[language]}
                paragraph3={text.Wedding.introP3[language]}
            />
            <LocationAndWeather
                title={text.Wedding.BoxEvent.boxTitle[language]}
                titleBox={text.Wedding.BoxEvent.Titlebox[language]}
                address1={text.Wedding.BoxEvent.addressP1[language]}
                address2={text.Wedding.BoxEvent.addressP2[language]}
                date={text.Wedding.BoxEvent.dateTime[language]}
                src={
                    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.946544808715!2d-41.91187708872573!3d-22.76736497926735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96ff1202fcdb65%3A0xa27673cadca1dc57!2sVilla%20Tres%20Marias%20Buzios!5e0!3m2!1sen!2sch!4v1689846300672!5m2!1sen!2sch"
                }
            />
            <CarouselWedding dataInfo={dataWedding} />
        </Stack>
    );
};
